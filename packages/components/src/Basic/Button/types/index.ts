import type { ExtractPropTypes, PropType, SlotsType } from 'vue'
import type { ButtonSizeType } from './size'
import type { ButtonHTMLType, ButtonType } from './type'

export const buttonProps = () => ({
  /**
   * 按钮类型
   */
  type: { type: String as PropType<ButtonType>, default: 'default' },
  /**
   * 尺寸
   */
  size: { type: String as PropType<ButtonSizeType>, default: 'md' },
  /**
   * 设置 `button` 原生的 type 值
   */
  htmlType: { type: String as PropType<ButtonHTMLType>, default: 'button' },
  /**
   * 禁用
   */
  disabled: { type: Boolean, default: false },
  /**
   * 加载
   */
  loading: { type: Boolean, default: false },
  /**
   * 加载效果延迟
   */
  loadingDelay: { type: Number, default: 0 },
  /**
   * 是否设置为块按钮铺满
   */
  block: { type: Boolean, default: false },
  /**
   * 是否朴素按钮
   */
  plain: { type: Boolean, default: false },
  /**
   * 是否圆形按钮
   */
  round: { type: Boolean, default: false },

  /** 点击事件 */
  onClick: Function as PropType<(e: MouseEvent) => void>
})

export type ButtonProps = Partial<ExtractPropTypes<ReturnType<typeof buttonProps>>>

export type ButtonSlot = SlotsType<{
  icon: any
  default: any
}>

export type { ButtonHTMLType, ButtonType, ButtonSizeType }

export default buttonProps
