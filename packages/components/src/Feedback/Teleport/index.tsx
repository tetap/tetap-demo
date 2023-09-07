import { Teleport, defineComponent, toRefs } from 'vue'
import { uniqueId } from 'lodash-es'
import { useTransition } from '../../hooks'
import customTeleportProps, { CustomTeleportSlot } from './types'
import '../../../css/index.css'

export const CustomTeleport = defineComponent({
  name: 'TetapTeleport',
  props: customTeleportProps(),
  slots: Object as CustomTeleportSlot,
  setup(props, { slots, emit }) {
    const state = toRefs(props)
    const { display, onTransitionEnd } = useTransition(state.open, 400)
    const key = uniqueId()
    const handleMaskClick = () => {
      emit('update:open', false)
    }
    return () => (
      <Teleport to={props.to || 'body'}>
        <div class={[display.value ? 'block' : 'hidden']}>
          <div
            class={[
              'fixed left-0 top-0 w-full h-full bg-black-10/50',
              props.open ? 'animate-fadeIn' : 'animate-fadeOut'
            ]}
            style={{ zIndex: 1000 + key }}
            onClick={handleMaskClick}
            onTransitionend={onTransitionEnd}
          ></div>
          <div
            class={['fixed left-0 right-0 top-0 bottom-0 w-5/12 h-4/6 bg-white m-auto']}
            style={{ zIndex: 1001 + key }}
          >
            {slots?.default?.()}
          </div>
        </div>
      </Teleport>
    )
  }
})
