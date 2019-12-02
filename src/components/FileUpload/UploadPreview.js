/** @jsx jsx */
import { jsx } from "@emotion/core"

import { Button } from "../Button"

const UploadPreview = ({ file: { url, filename }, removeFile, index }) => (
  <div css={{ display: `flex`, alignItems: `center` }}>
    <img
      css={{
        height: 100,
        width: 100,
        margin: 0,
        objectFit: `contain`,
      }}
      src={url}
      alt={`An uploaded file preview called ${filename}`}
    />
    <div>
      <div>{filename}</div>
      <div>
        <Button
          variant="GHOST"
          size="S"
          type="button"
          onClick={() => removeFile(index)}
        >
          Remove
        </Button>
      </div>
    </div>
  </div>
)

export default UploadPreview
