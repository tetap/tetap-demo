import type { ExtractPropTypes, PropType, RendererElement, SlotsType } from 'vue'

export const customTeleportProps = () => ({
  to: { type: [String, Object] as PropType<string | RendererElement>, default: 'body' },
  open: { type: Boolean, default: false },
  'onUpdate:open': Function as PropType<(open: boolean) => void>
})
export type CustomTeleportProps = Partial<ExtractPropTypes<ReturnType<typeof customTeleportProps>>>

export type CustomTeleportSlot = SlotsType<{
  default: any
}>

export default customTeleportProps
