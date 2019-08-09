import { createSerializer } from "jest-emotion"
import * as emotion from "@emotion/core"
import styled from "@emotion/styled"
import "jest-dom/extend-expect"
import "react-testing-library/cleanup-after-each"

expect.addSnapshotSerializer(createSerializer(emotion))
