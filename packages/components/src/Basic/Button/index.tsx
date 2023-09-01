import { computed, defineComponent } from 'vue'
import buttonProps, { ButtonSlot } from './types'
import {
  successFill,
  warningFill,
  errorFill,
  primaryFill,
  successStroke,
  warningStroke,
  errorStroke,
  primaryStroke
} from './style'
import '../../../css/index.css'

export const Button = defineComponent({
  name: 'TetapButton',
  props: buttonProps(),
  slots: Object as ButtonSlot,
  setup(props, { slots }) {
    const size = computed(() => {
      switch (props.size) {
        case 'normal':
        default:
          return 'rounded-md px-3 py-2 text-sm'
      }
    })
    const block = computed(() => {
      return props.block ? 'w-full' : ''
    })
    const type = computed(() => {
      switch (props.type) {
        case 'success':
          return props.plain ? successStroke : successFill
        case 'warning':
          return props.plain ? warningStroke : warningFill
        case 'error':
          return props.plain ? errorStroke : errorFill
        case 'primary':
          return props.plain ? primaryStroke : primaryFill
        case 'text':
          return 'border border-solid border-transparent text-black-8 hover:bg-gray-2 active:bg-gray-3 focus:outline-black-3 focus-visible:outline-black-3 focus-visible:bg-gray-3 focus-visible:outline-gray-3'
        default:
          return 'border border-solid text-black-8 border-black-3 hover:bg-gray-1 active:bg-gray-2 focus:outline-black-3 focus-visible:outline-black-3 focus-visible:bg-gray-2'
      }
    })
    return () => (
      <button
        class={[
          'outline-none outline-offset-4 select-none whitespace-nowrap text-ellipsis overflow-hidden relative',
          size.value,
          block.value,
          type.value,
          props.disabled ? 'cursor-no-drop' : 'cursor-pointer'
        ]}
        disabled={props.disabled}
        type={props.htmlType}
      >
        <div>{slots.default?.()}</div>
      </button>
    )
  }
})

export * from './types'
