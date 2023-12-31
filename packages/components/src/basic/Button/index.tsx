import { computed, defineComponent } from 'vue'
import buttonProps, { ButtonSlot } from './types'
import { useDelay } from '../../hooks'
import { ButtonTheme } from './theme'
import { Spin } from '../icon'

export const Button = defineComponent({
  name: 'TetapButton',
  props: buttonProps(),
  slots: Object as ButtonSlot,
  setup(props, { slots, emit }) {
    const loadingDelay = computed(() => props.loadingDelay)
    const loading = computed(() => props.loading)
    const { innerLoading } = useDelay(loadingDelay, loading)
    const isDisabled = computed(() => {
      return props.disabled || props.loading
    })
    return () => (
      <button
        class={[
          ButtonTheme({
            color: props.type || 'default',
            size: props.size || 'md',
            rounded: props.round,
            fullSized: props.block,
            disabled: isDisabled.value,
            plain: props.plain ? props.type : 'default'
          })
        ]}
        disabled={isDisabled.value}
        type={props.htmlType}
        onClick={(event) => emit('click', event)}
      >
        <div class={'flex items-center justify-center gap-2'}>
          {innerLoading.value && <Spin />}
          {slots.default?.()}
        </div>
      </button>
    )
  }
})

export * from './types'
