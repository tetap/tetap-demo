import type { ExtractPropTypes, PropType, RendererElement, SlotsType } from 'vue'

export const customTeleportProps = () => ({
  to: { type: [String, Object] as PropType<string | RendererElement>, default: 'body' },
  open: { type: Boolean, default: false },
  width: { type: [String, Number], default: '500px' },
  /** 点击蒙层是否允许关闭 default: true */
  maskClosable: { type: Boolean, default: true },
  'onUpdate:open': Function as PropType<(open: boolean) => void>,
  onClose: Function as PropType<(e: MouseEvent | KeyboardEvent) => void>
})
export type CustomTeleportProps = Partial<ExtractPropTypes<ReturnType<typeof customTeleportProps>>>

export type CustomTeleportSlot = SlotsType<{
  default: any
}>

export default customTeleportProps
