import { CloseOutlined } from '../../basic/icon'
import { defineComponent, PropType, SlotsType } from 'vue'

export const ModalHeader = defineComponent({
  name: 'TetapModalHeader',
  props: {
    onClose: Function as PropType<() => void>,
    title: { type: String, default: '' }
  },
  slots: Object as SlotsType<{
    default: any
  }>,
  setup(props, { emit }) {
    const onClick = () => emit('close')

    return () => (
      <div class={['flex pl-5 text-lg text-black-8']}>
        <div class={['flex-1 min-w-0 py-4']}>{props.title}</div>
        <div class={['px-4 py-4 text-xl']}>
          <div
            class={
              'cursor-pointer rounded-md duration-150 text-gray-7 hover:bg-gray-2 active:bg-gray-3 hover:text-black-8 p-1'
            }
            onClick={onClick}
          >
            <CloseOutlined />
          </div>
        </div>
      </div>
    )
  }
})
