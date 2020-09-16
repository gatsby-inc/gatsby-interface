<img src="https://user-images.githubusercontent.com/21834/74070062-35b91980-4a00-11ea-93a8-b77bde7b4c37.png" width="48" height="48" alt="rebeccapurple dot" />
<br>
<br>

# Gatsby Interface

<a href="https://www.npmjs.org/package/gatsby-interface">
  <img src="https://img.shields.io/npm/v/gatsby-interface.svg" alt="Current npm package version." />
</a>
<a href="https://npmcharts.com/compare/gatsby-interface?minimal=true">
  <img src="https://img.shields.io/npm/dm/gatsby-interface.svg" alt="Downloads per month on npm." />
</a>
<a href="https://npmcharts.com/compare/gatsby-interface?minimal=true">
  <img src="https://img.shields.io/npm/dt/gatsby-interface.svg" alt="Total downloads on npm." />
</a>

Storybook available at [gatsby-interface.netlify.com](https://gatsby-interface.netlify.com/):

![screenshot](https://user-images.githubusercontent.com/21834/78464072-36f78180-76e5-11ea-96dc-5e4911dee1f4.png)

## Installation

Using [Yarn](https://yarnpkg.com/):

```shell
yarn add gatsby-interface
```

Using [npm](https://www.npmjs.com/):

```shell
npm install gatsby-interface --save
```

### Fonts

Certain Gatsby Interface components require the `Futura PT` webfont. These files are git-ignored to prevent the unauthorized release of licensed assets, and are not included in this repository.

Gatsby Inc. employees can download these fonts from our [Google Drive](https://drive.google.com/drive/u/1/folders/1DA_iNzLbd1_gvU_FWTzYK6MgLSl85L4v). Put all those folders in `src/assets/futura-pt` and you should be good to go!

## Development

1. Clone the repository: `git clone https://github.com/gatsby-inc/gatsby-interface.git`.
2. Install dependencies: `yarn`.
3. Run Storybook: `yarn storybook`.

### Chromatic testing

To run the visual testing tool, run `CHROMATIC_APP_CODE=<insert_app_code> yarn chromatic`

You can find the app code in the Chromatic dashboard - https://www.chromaticqa.com

## ❗ Code of Conduct

Gatsby is dedicated to building a welcoming, diverse, safe community. We expect everyone participating in the Gatsby community to abide by our [**Code of Conduct**](https://gatsbyjs.org/contributing/code-of-conduct/). Please read it. Please follow it. In the Gatsby community, we work hard to build each other up and create amazing things together. 💪💜
