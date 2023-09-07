import type { ExtractPropTypes, SlotsType } from 'vue'

export const modalProps = () => ({
  open: { type: Boolean, default: false }
})

export type ModalPropsType = Partial<ExtractPropTypes<ReturnType<typeof modalProps>>>

export type ModalSlot = SlotsType<{
  default: any
}>

export default modalProps
