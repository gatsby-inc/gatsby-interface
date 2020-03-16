import React from "react"
import { storiesOf } from "@storybook/react"
import { FileUpload } from "./"
import { StoryUtils } from "../../utils/storybook"

// sample of data that filestack returns upon successful upload
const mockedFile = {
  filename: `corgi.jpg`,
  handle: `i2bdWIuCS6i0DNSqG0ih`,
  mimetype: `image/jpeg`,
  originalPath: `corgi.jpg`,
  size: 146993,
  source: `local_file_system`,
  url: `https://cdn.filestackcontent.com/i2bdWIuCS6i0DNSqG0ih`,
  uploadId: `K0T75S35q5b1iV4c`,
  originalFile: {
    name: `corgi.jpg`,
    type: `image/jpeg`,
    size: 146993,
  },
  status: `Stored`,
}

const API_KEY =
  process.env.GATSBY_FILESTACK_API_KEY ||
  process.env.STORYBOOK_FILESTACK_API_KEY

const APIKeyMissing = () => (
  <p>
    Using the FileUpload component without setting the GATSBY_FILESTACK_API_KEY
    will fail
  </p>
)

storiesOf(`File Upload`, module)
  .add(`Single File Upload`, () => (
    <StoryUtils.Container>
      {!API_KEY ? (
        <APIKeyMissing />
      ) : (
        <>
          <FileUpload
            name="file"
            setFieldValue={() => {
              // do nothing.
            }}
          />
          <hr />
          <FileUpload
            name="file"
            setFieldValue={() => {
              // do nothing.
            }}
            defaultFile={mockedFile}
          />
        </>
      )}
    </StoryUtils.Container>
  ))
  .add(`Multi File Upload`, () => (
    <StoryUtils.Container>
      {!API_KEY ? (
        <APIKeyMissing />
      ) : (
        <>
          <FileUpload
            multi={true}
            name="file"
            setFieldValue={() => {
              // do nothing.
            }}
            fileTypes={[`image/jpeg`]}
          />
          <hr />
          <FileUpload
            multi={true}
            name="file"
            setFieldValue={() => {
              // do nothing.
            }}
            fileTypes={[`image/jpeg`]}
            defaultFile={mockedFile}
          />
        </>
      )}
    </StoryUtils.Container>
  ))
  .add(`File Upload with Custom Components`, () => (
    <StoryUtils.Container>
      {!API_KEY ? (
        <APIKeyMissing />
      ) : (
        <>
          <FileUpload
            multi={false}
            name="file"
            setFieldValue={() => {
              // do nothing.
            }}
            fileTypes={[`image/jpeg`]}
            CustomButtonComponent={({ onPick }) => (
              <button type="button" onClick={onPick}>
                Custom Button
              </button>
            )}
            CustomPreviewComponent={({ file, index, removeFile }) => (
              <div>
                <span>{file.filename}</span>
                <button type="button" onClick={() => removeFile(index)}>
                  X
                </button>
              </div>
            )}
          />
          <hr />
          <FileUpload
            multi={false}
            name="file"
            setFieldValue={() => {
              // do nothing.
            }}
            fileTypes={[`image/jpeg`]}
            CustomButtonComponent={({ onPick }) => (
              <button type="button" onClick={onPick}>
                Custom Button
              </button>
            )}
            CustomPreviewComponent={({ file, index, removeFile }) => (
              <div>
                <span>{file.filename}</span>
                <button type="button" onClick={() => removeFile(index)}>
                  X
                </button>
              </div>
            )}
            defaultFile={mockedFile}
          />
        </>
      )}
    </StoryUtils.Container>
  ))
