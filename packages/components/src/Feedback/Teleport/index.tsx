import { Teleport, defineComponent } from 'vue'
import '../../../css/index.css'

export const CustomTeleport = defineComponent({
  name: 'TetapTeleport',
  setup(_, { slots }) {
    return () => (
      <Teleport to="body">
        <div class="modal">
          <p>Hello from the modal!</p>
        </div>
      </Teleport>
    )
  }
})
