import { defineComponent } from 'vue'
import modalProps, { ModalSlot } from './types'
import { CustomTeleport } from '../Teleport'
import '../../../css/index.css'

export const Modal = defineComponent({
  name: 'TetapModal',
  props: modalProps(),
  slots: Object as ModalSlot,
  setup(props) {
    return () => <CustomTeleport open={props.open}>Modal</CustomTeleport>
  }
})
