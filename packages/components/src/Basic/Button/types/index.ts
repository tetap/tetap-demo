import { ExtractPropTypes, PropType, SlotsType } from 'vue'
import { SizeType } from './size'
import { ButtonHTMLType, ButtonType } from './type'

export const buttonProps = () => ({
  /**
   * 按钮类型
   */
  type: { type: String as PropType<ButtonType>, default: 'default' },
  /**
   * 尺寸
   */
  size: { type: String as PropType<SizeType>, default: 'normal' },
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
  loadingDelay: { type: Number, default: 300 },
  /**
   * 是否设置为块按钮铺满
   */
  block: { type: Boolean, default: false }
})

export type ButtonProps = Partial<ExtractPropTypes<ReturnType<typeof buttonProps>>>

export type ButtonSlot = SlotsType<{
  icon: any
  default: any
}>

export default buttonProps
