import { defineComponent, PropType, SlotsType } from 'vue'
import { Button, Space } from '../../basic'
import '../../../css/index.css'

export const ModalFooter = defineComponent({
  name: 'TetapModalFooter',
  props: {
    onClose: Function as PropType<() => void>
  },
  slots: Object as SlotsType<{
    default: any
  }>,
  setup(props, { emit }) {
    const onClick = () => emit('close')

    return () => (
      <div class={['flex justify-end px-5 text-lg text-black-8']}>
        <div class={['py-4 text-xl']}>
          <Space size={20}>
            <Button size={'sm'} onClick={onClick}>
              取消
            </Button>
            <Button size={'sm'} type={'primary'} onClick={onClick}>
              确认
            </Button>
          </Space>
        </div>
      </div>
    )
  }
})
