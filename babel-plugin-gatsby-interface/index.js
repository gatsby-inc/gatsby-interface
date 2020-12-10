const fs = require("fs-extra")
const { addNamed } = require("@babel/helper-module-imports")

const cache = new Map()

function resolveImport(importName) {
  if (cache.has(importName)) {
    return cache.get(importName)
  }

  // Only support components now, we can add things like theme and stylesheets but they have to use the same pattern
  const componentsPath = `gatsby-interface/dist/components/${importName}/`
  if (fs.existsSync(componentsPath)) {
    return `${componentsPath}${importName}.esm.js`
  }
}

module.exports = function gatsbyInterface({ types }) {
  const visitor = {
    Program(path, state) {
      state.isModule = false

      if (types.isModuleDeclaration(path)) {
        state.isModule = true
      }
    },

    ImportDeclaration(path) {
      // We only care about gatsby-interface imports
      if (path.get("source").node.value !== "gatsby-interface") {
        return
      }

      const parent = path.parentPath
      const specifiers = path.get("specifiers")
      const specifierCount = specifiers.length
      const imports = []
      for (const specifier of specifiers) {
        if (specifier.isImportSpecifier()) {
          const importedName = specifier.node.imported.name
          const localName = specifier.node.local.name
          const newImportPath = resolveImport(importedName)

          if (newImportPath) {
            imports.push({
              binding: specifier.scope.bindings[importedName],
              newImportName: addNamed(parent, importedName, newImportPath, {
                nameHint: localName,
              }).name,
            })
            specifier.remove()
          }
        }
      }

      // if all specifiers got removed we remove the whole line
      if (imports.length === specifierCount) {
        path.remove()
      }

      // replace all references with new importName
      imports.forEach(({ binding, newImportName }) => {
        binding.referencePaths.forEach(reference => {
          reference.node.name = newImportName
          reference.replaceWith(reference)
        })
      })
    },
  }

  return { visitor }
}
