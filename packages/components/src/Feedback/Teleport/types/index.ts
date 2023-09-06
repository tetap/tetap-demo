import type { ExtractPropTypes, PropType, RendererElement, SlotsType } from 'vue'

export const customTeleportProps = () => ({
  to: { type: [String, Object] as PropType<string | RendererElement>, default: 'body' }
})
export type CustomTeleportProps = Partial<ExtractPropTypes<ReturnType<typeof customTeleportProps>>>

export type CustomTeleportSlot = SlotsType<{
  default: any
}>

export default customTeleportProps
