import { defineComponent } from 'vue'
import modalProps, { ModalSlot } from './types'
import { CustomTeleport } from '../Teleport'
import { ModalHeader } from './ModalHeader'
import '../../../css/index.css'
import { ModalFooter } from './ModalFooter'

export const Modal = defineComponent({
  name: 'TetapModal',
  props: modalProps(),
  slots: Object as ModalSlot,
  setup(props, { emit }) {
    const handleUpdateOpen = (value: boolean) => emit('update:open', value)
    return () => (
      <CustomTeleport open={props.open} onUpdate:open={handleUpdateOpen}>
        <div class={['w-full bg-white overflow-hidden rounded-lg m-auto']}>
          {props.header && (
            <ModalHeader title={props.title} onClose={() => handleUpdateOpen(false)} />
          )}
          <div></div>
          {props.footer && <ModalFooter onClose={() => handleUpdateOpen(false)} />}
        </div>
      </CustomTeleport>
    )
  }
})
