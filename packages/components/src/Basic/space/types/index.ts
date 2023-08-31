import { ExtractPropTypes, PropType, SlotsType } from 'vue'
import type { SpaceAlignType } from './align'
import type { SpaceDirectionType } from './direction'
import type { SpaceSizeType } from './size'

export const spaceProps = () => ({
  /**
   * 间距方向	`vertical` | `horizontal`
   */
  direction: { type: String as PropType<SpaceDirectionType>, default: 'horizontal' },
  /**
   * 间距大小, 默认单位为 `px`，支持数组形式来分别设置横向和纵向间距
   */
  size: {
    type: [Number, String, Array] as PropType<SpaceSizeType>,
    default: '8px'
  },
  /**
   * 对齐方式	`start` | `end` | `center` | `baseline`
   */
  align: { type: String as PropType<SpaceAlignType>, default: '' },
  /**
   * 是否自动换行，仅适用于水平方向排列
   */
  wrap: { type: Boolean, default: false },
  /**
   * 是否让 `Space` 变为一个块级元素，填充整个父元素
   */
  fill: { type: Boolean, default: false }
})

export type SpacePropsType = Partial<ExtractPropTypes<ReturnType<typeof spaceProps>>>

export type SpaceSlot = SlotsType<{
  default: any
}>

export type { SpaceAlignType, SpaceDirectionType, SpaceSizeType }

export default spaceProps
