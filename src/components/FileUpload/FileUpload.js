/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import loadable from "@loadable/component"
import { Button } from "../Button"
import UploadPreview from "./UploadPreview"
const ReactFilestack = loadable(() => import(`filestack-react`), { ssr: false })

const defaultFilestackOptions = {
  accept: [`image/jpeg`, `image/png`],
  maxSize: 10 * 1024 * 1024, // 10MB
  fromSources: [`local_file_system`, `url`, `googledrive`, `dropbox`, `github`],
}

const FileUpload = ({
  actionOptions,
  CustomButtonComponent,
  CustomPreviewComponent,
  defaultFile,
  fileTypes,
  multi = false,
  name,
  setFieldValue,
  ...rest
}) => {
  const [files, setFiles] = useState([])

  const removeFile = index => {
    if (index === undefined) {
      throw new Error(
        `you must provide an index (from props) to the removeFile method in a CustomPreviewComponent, ie removeFile(index)`
      )
    }
    if (index >= files.length || index < 0) {
      throw new Error(
        `remove file failed because the index for the removed file is outside of range`
      )
    }
    files.splice(index, 1)
    setFiles([...files])
  }

  const addFiles = uploadedFiles => {
    const filesToSet = multi ? [...files, ...uploadedFiles] : [uploadedFiles[0]]
    setFiles([...filesToSet])
    setFieldValue(name, filesToSet.map(file => file && file.url))
  }

  useEffect(() => {
    if (defaultFile) addFiles([{ ...defaultFile }])
  }, [])

  const isEmpty = !!files.length

  const buttonText = isEmpty
    ? `Choose ${multi ? `another` : `a different`} file`
    : `Pick file${multi ? `s` : ``}`

  const renderButton = ({ onPick, ...rest }) => {
    // use custom component if provided
    if (CustomButtonComponent) {
      return (
        <CustomButtonComponent onPick={onPick} {...rest}>
          {buttonText}
        </CustomButtonComponent>
      )
    }

    return (
      <Button variant="SECONDARY" size="M" onClick={onPick} {...rest}>
        {buttonText}
      </Button>
    )
  }

  const renderPreview = (file, index) => {
    if (!file) return null
    const previewProps = {
      key: file.uploadId,
      file,
      index,
      removeFile,
    }
    // use custom file preview component if provided
    if (CustomPreviewComponent) {
      return <CustomPreviewComponent {...previewProps} />
    } else {
      return <UploadPreview {...previewProps} />
    }
  }

  const API_KEY =
    process.env.GATSBY_FILESTACK_API_KEY ||
    process.env.STORYBOOK_FILESTACK_API_KEY
  if (!API_KEY) {
    console.error(
      `Using the <FileUpload /> component without setting the GATSBY_FILESTACK_API_KEY will fail`
    )
    return null
  }

  return (
    <>
      <ReactFilestack
        apikey={API_KEY}
        actionOptions={{
          maxFiles: multi ? 5 : 1,
          ...defaultFilestackOptions,
          ...actionOptions,
          accept: fileTypes && [...fileTypes],
        }}
        onSuccess={result => {
          addFiles(result.filesUploaded)
        }}
        customRender={renderButton}
        {...rest}
      />
      {isEmpty && files.map(renderPreview)}
    </>
  )
}

FileUpload.propTypes = {
  actionOptions: PropTypes.shape({
    accept: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    maxSize: PropTypes.number,
    fromSources: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
  CustomButtonComponent: PropTypes.func,
  CustomPreviewComponent: PropTypes.func,
  fileTypes: PropTypes.arrayOf(
    PropTypes.oneOf([
      `.pdf`,
      `image/jpeg`,
      `image/png`,
      `image/*`,
      `video/*`,
      `audio/*`,
      `application/*`,
      `text/*`,
    ])
  ),
  multi: PropTypes.bool,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
}

export default FileUpload
