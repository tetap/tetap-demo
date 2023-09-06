import { Teleport, defineComponent } from 'vue'
import customTeleportProps, { CustomTeleportSlot } from './types'
import '../../../css/index.css'

export const CustomTeleport = defineComponent({
  name: 'TetapTeleport',
  props: customTeleportProps(),
  slots: Object as CustomTeleportSlot,
  setup(props, { slots }) {
    return () => (
      <Teleport to={props.to || 'body'}>
        <div class="modal">
          <p>Hello from the modal!</p>
        </div>
      </Teleport>
    )
  }
})
