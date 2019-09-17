import { createSerializer } from "jest-emotion"
import * as emotion from "emotion"
import "jest-dom/extend-expect"
import "react-testing-library/cleanup-after-each"

expect.addSnapshotSerializer(createSerializer(emotion))
