import type { ExtractPropTypes, SlotsType } from 'vue'
import customTeleportProps from '../../Teleport/types'

export const modalProps = () => ({
  ...customTeleportProps()
})

export type ModalPropsType = Partial<ExtractPropTypes<ReturnType<typeof modalProps>>>

export type ModalSlot = SlotsType<{
  default: any
}>

export default modalProps
