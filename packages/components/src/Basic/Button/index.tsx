import { computed, defineComponent } from 'vue'
import buttonProps, { ButtonSlot } from './types'
import '../../../css/index.css'

export const Button = defineComponent({
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
    return () => (
      <button
        class={[
          size.value,
          block.value,
          'transition outline-none select-none text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 focus:outline-indigo-700 focus-visible:outline-indigo-700 focus-visible:bg-indigo-700'
        ]}
        type={props.htmlType}
      >
        <div>{slots.default?.()}</div>
      </button>
    )
  }
})
