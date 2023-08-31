import { computed, defineComponent } from 'vue'
import buttonProps, { ButtonSlot } from './types'
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
          return 'rounded-md px-3.5 py-2.5 text-sm'
      }
    })
    const block = computed(() => {
      return props.block ? 'w-full' : ''
    })
    const type = computed(() => {
      switch (props.type) {
        case 'success':
          return 'text-white bg-success-7 hover:bg-success-6 active:bg-success-8 focus:outline-success-8 focus-visible:outline-success-8 focus-visible:bg-success-8'
        case 'warning':
          return 'text-white bg-warning-7 hover:bg-warning-6 active:bg-warning-8 focus:outline-warning-8 focus-visible:outline-warning-8 focus-visible:bg-warning-8'
        case 'error':
          return 'text-white bg-error-7 hover:bg-error-6 active:bg-error-8 focus:outline-error-8 focus-visible:outline-error-8 focus-visible:bg-error-8'
        case 'text':
          return ''
        case 'primary':
          return 'text-white shadow-md shadow-primary-2 bg-primary-7 hover:bg-primary-6 active:bg-primary-8 focus:outline-primary-8 focus-visible:outline-primary-8 focus-visible:bg-primary-8'
        default:
          return 'border-black'
      }
    })
    return () => (
      <button
        class={[
          size.value,
          block.value,
          type.value,
          'cursor-pointer transition outline-none select-none whitespace-nowrap text-ellipsis overflow-hidden relative border border-solid border-transparent box-border'
        ]}
        type={props.htmlType}
      >
        <div>{slots.default?.()}</div>
      </button>
    )
  }
})

export * from './types'
