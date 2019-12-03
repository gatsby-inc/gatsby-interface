import { AvatarSize as AvatarSizeDefinition } from "./types"
import { AvatarProps as AvatarPropsDefinition } from "./Avatar"
import {
  AvatarsGroupProps as AvatarsGroupPropsDefinition,
  AvatarDescriptor as AvatarDescriptorDefinition,
} from "./AvatarsGroup"

export type AvatarSize = AvatarSizeDefinition
export type AvatarProps = AvatarPropsDefinition
export type AvatarsGroupProps = AvatarsGroupPropsDefinition
export type AvatarDescriptor = AvatarDescriptorDefinition

export { default as Avatar } from "./Avatar"
export { default as AvatarsGroup } from "./AvatarsGroup"
