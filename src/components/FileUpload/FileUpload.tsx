/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { PickerFileMetadata, PickerResponse, PickerOptions } from 'filestack-js'
import { Button } from "../Button"
import UploadPreview from "./UploadPreview"

const defaultFilestackOptions = {
  accept: [`image/jpeg`, `image/png`],
  maxSize: 10 * 1024 * 1024, // 10MB
  fromSources: [`local_file_system`, `url`, `googledrive`, `dropbox`, `github`],
}

export type FilestackUploadContextValue = {
  uploadedFiles: PickerFileMetadata[]
  addFiles: (uploadedFiles: PickerFileMetadata[]) => void
  removeFile: (uploadId: string) => void
}

const FilestackUploadContext = React.createContext<FilestackUploadContextValue>({
  uploadedFiles: [],
  addFiles: () => undefined,
  removeFile: () => undefined
})

export type FilestackRenderPreviewFn = (file: PickerFileMetadata) => React.ReactNode

export type FilestackUploadProps = {
  FilestackComponent: React.ComponentType<any>;
  apiKey: string;
  defaultFiles?: PickerFileMetadata[];
  maxFiles?: number;
  renderPreview?: FilestackRenderPreviewFn;
  actionOptions?: PickerOptions;
  showPreview?: boolean;
  children?: React.ReactNode;
}

export function useFileUpload() {
  const [files, setFiles] = React.useState<PickerFileMetadata[]>([])

  const removeFile = (fileId: string) => {
    setFiles(files.filter(({ uploadId }) => uploadId !== fileId))
  }

  const addFiles = (uploadedFiles: PickerFileMetadata[]) => {
    setFiles([...files, ...uploadedFiles])
  }

  return {
    uploadedFiles: files,
    addFiles,
    removeFile,
  }
}

export function useFilestackUploadContext() {
  return React.useContext(FilestackUploadContext)
}

export function FilestackUpload({
  FilestackComponent,
  apiKey,
  defaultFiles = [],
  maxFiles = 1,
  renderPreview = defaultRenderPreview,
  actionOptions,
  showPreview = true,
  children,
  ...rest
}: FilestackUploadProps) {
  const { uploadedFiles, addFiles, removeFile } = useFileUpload()

  React.useEffect(() => {
    if (defaultFiles && defaultFiles.length > 0) {
      addFiles(defaultFiles)
    }
  }, [defaultFiles])

  const isEmpty = !!uploadedFiles.length
  const multi = maxFiles > 1

  const renderButton = ({ onPick }: { onPick: () => void }) => {
    const buttonText = isEmpty
      ? `Choose ${multi ? `another` : `a different`} file`
      : `Pick file${multi ? `s` : ``}`

    return (
      <Button variant="SECONDARY" size="M" onClick={onPick} {...rest}>
        {buttonText}
      </Button>
    )
  }

  if (!apiKey) {
    console.error(
      `Using the <FilestackUpload /> component without passing "apiKey" will fail`
    )
    return null
  }

  return (
    <FilestackUploadContext.Provider value={{ uploadedFiles, addFiles, removeFile }}>
      <React.Fragment>
        <FilestackComponent
          apikey={apiKey}
          actionOptions={{
            maxFiles,
            ...defaultFilestackOptions,
            ...(actionOptions || {}),
          }}
          onSuccess={(result: PickerResponse) => {
            addFiles(result.filesUploaded)
          }}
          customRender={renderButton}
          {...rest}
        />
        {showPreview && !isEmpty && uploadedFiles.map(renderPreview)}
        {children}
      </React.Fragment>
    </FilestackUploadContext.Provider>
  )
}

function defaultRenderPreview(file: PickerFileMetadata) {
  return <FilestackUploadPreview file={file} />
}

export type FilestackUploadPreviewProps = {
  file: PickerFileMetadata;
}

export function FilestackUploadPreview({ file }: FilestackUploadPreviewProps) {
  const { removeFile } = useFilestackUploadContext()
  return (
    <div css={{ display: `flex`, alignItems: `center` }}>
      <img
        css={{
          height: 100,
          width: 100,
          margin: 0,
          objectFit: `contain`,
        }}
        src={file.url}
        alt={`An uploaded file preview called ${file.filename}`}
      />
      <div>
        <div>{file.filename}</div>
        <div>
          <Button
            variant="GHOST"
            size="S"
            type="button"
            onClick={() => removeFile(file.uploadId)}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  )
}
