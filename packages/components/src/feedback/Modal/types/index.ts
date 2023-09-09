import type { ExtractPropTypes, SlotsType } from 'vue'
import customTeleportProps from '../../Teleport/types'

export const modalProps = () => ({
  header: { type: Boolean, default: true },
  footer: { type: Boolean, default: true },
  body: { type: Boolean, default: true },
  title: { type: String, default: '' },
  ...customTeleportProps()
})

export type ModalPropsType = Partial<ExtractPropTypes<ReturnType<typeof modalProps>>>

export type ModalSlot = SlotsType<{
  default: any
}>

export default modalProps
