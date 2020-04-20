import React from "react"

export type GenericFile = {
  id: string;
  name: string;
  url: string;
}

export type UseFileUploadOptions = {
}

export type UseFileUploadInterface = {
  uploadedFiles: GenericFile[];
  addFiles: (uploadedFiles: GenericFile[]) => void
  removeFile: (fileId: string) => void
}
// getId
export function useFileUpload(_options: UseFileUploadOptions = {}): UseFileUploadInterface {
  const [files, setFiles] = React.useState<GenericFile[]>([])

  const removeFile = (fileId: string) => {
    setFiles(files.filter(({ id }) => id !== fileId))
  }

  const addFiles = (uploadedFiles: GenericFile[]) => {
    setFiles([...files, ...uploadedFiles])
  }

  return {
    uploadedFiles: files,
    addFiles,
    removeFile,
  }
}
