import { ref, Teleport, defineComponent, onMounted, onBeforeUnmount, toRefs } from 'vue'
import { uniqueId } from 'lodash-es'
import { useTransition } from '../../hooks'
import customTeleportProps, { CustomTeleportSlot } from './types'
import '../../../css/index.css'

export const CustomTeleport = defineComponent({
  name: 'TetapTeleport',
  props: customTeleportProps(),
  slots: Object as CustomTeleportSlot,
  setup(props, { slots }) {
    const state = toRefs(props)
    const { display, onTransitionEnd } = useTransition(state.open, 1000)
    const key = uniqueId()
    onMounted(() => {
      console.log('mounted')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    const handleMaskClick = () => {}
    return () => (
      <Teleport to={props.to || 'body'}>
        <div class={[display.value ? 'block' : 'hidden']}>
          {display.value && (
            <div
              class={[
                'fixed left-0 top-0 w-full h-full bg-black-10/50 opacity-0 transition-opacity !duration-1000 pointer-events-none',
                props.open ? 'opacity-100' : ''
              ]}
              style={{ zIndex: 1000 + key }}
              onClick={handleMaskClick}
            >
              123
            </div>
          )}
        </div>
      </Teleport>
    )
  }
})
