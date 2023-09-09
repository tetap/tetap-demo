import { Teleport, defineComponent, toRefs, shallowRef } from 'vue'
import { useTransition, useUniqueId } from '../../hooks'
import customTeleportProps, { CustomTeleportSlot } from './types'
import '../../../css/index.css'

export const CustomTeleport = defineComponent({
  name: 'TetapTeleport',
  props: customTeleportProps(),
  slots: Object as CustomTeleportSlot,
  setup(props, { slots, emit }) {
    const state = toRefs(props)
    const { display, onTransitionEnd } = useTransition(state.open, 400)
    const key = useUniqueId()

    const contentClickRef = shallowRef(false)
    const contentTimeoutRef = shallowRef<any>()
    const wrapperRef = shallowRef<HTMLDivElement>()

    const onInternalClose = (e: MouseEvent | KeyboardEvent) => {
      props.onClose?.(e)
      emit('update:open', false)
    }

    const onContentMouseDown = () => {
      clearTimeout(contentTimeoutRef.value)
      contentClickRef.value = true
    }

    const onContentMouseUp = () => {
      contentTimeoutRef.value = setTimeout(() => {
        contentClickRef.value = false
      })
    }

    const onWrapperClick = (e: MouseEvent) => {
      if (!props.maskClosable) return null
      if (contentClickRef.value) {
        contentClickRef.value = false
      } else if (wrapperRef.value === e.target) {
        onInternalClose(e)
      }
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
            onTransitionend={onTransitionEnd}
          ></div>
          <div
            class={[
              'fixed left-0 top-0 w-full h-full overflow-auto p-4 flex items-center justify-center'
            ]}
            style={{ zIndex: 1000 + key }}
            onClick={onWrapperClick}
            ref={wrapperRef}
          >
            <div
              class={[
                'pointer-events-auto relative m-auto',
                props.open ? 'animate-fadeInUp' : 'animate-fadeOutDown'
              ]}
              style={{ width: '500px' }}
              onMousedown={onContentMouseDown}
              onMouseup={onContentMouseUp}
            >
              {slots?.default?.()}
            </div>
          </div>
        </div>
      </Teleport>
    )
  }
})
