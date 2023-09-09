import { Teleport, defineComponent, watch, toRefs, shallowRef } from 'vue'
import { useTransition, useUniqueId } from '../../hooks'
import customTeleportProps, { CustomTeleportSlot } from './types'
import KeyCode from '../../utils/KeyCode'
import ScrollLocker from '../../utils/ScrollLocker'

export const CustomTeleport = defineComponent({
  name: 'TetapTeleport',
  props: customTeleportProps(),
  slots: Object as CustomTeleportSlot,
  setup(props, { slots, emit }) {
    const state = toRefs(props)
    const { display, onTransitionEnd } = useTransition(state.open, 400)
    const key = useUniqueId()
    const to = props.to || 'body'
    const contentClickRef = shallowRef(false)
    const contentTimeoutRef = shallowRef<any>()
    const wrapperRef = shallowRef<HTMLDivElement>()
    const lastOutSideActiveElementRef = shallowRef<HTMLElement>()

    const onInternalClose = (e: MouseEvent | KeyboardEvent) => {
      if (display.value) {
        props.onClose?.(e)
        emit('update:open', false)
      }
    }
    let scrollLocker: any
    watch(
      () => display.value,
      (newVal) => {
        if (!scrollLocker) {
          scrollLocker = new ScrollLocker({
            container: typeof to === 'string' ? document.querySelector(to)! : (to as HTMLElement)
          })
        }
        if (newVal) {
          scrollLocker.lock()
          lastOutSideActiveElementRef.value = document.activeElement as HTMLElement
          ;(document.activeElement as HTMLDivElement)?.blur()
          wrapperRef.value?.focus()
        } else {
          scrollLocker.unLock()
          ;(document.activeElement as HTMLDivElement)?.blur()
          // lastOutSideActiveElementRef.value?.focus()
        }
      },
      { immediate: true, flush: 'post' }
    )
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

    const onWrapperKeydown = (e: KeyboardEvent) => {
      if (props.keyboard && e.keyCode === KeyCode.ESC) {
        e.stopPropagation()
        onInternalClose(e)
        return
      }
    }

    return () => (
      <Teleport to={to}>
        <div class={[display.value ? 'block' : 'hidden']}>
          <div
            tabindex={-1}
            class={[
              'fixed left-0 top-0 w-full h-full bg-black-10/50 outline-0',
              props.open ? 'animate-fadeIn' : 'animate-fadeOut'
            ]}
            style={{ zIndex: 1000 + key }}
            onTransitionend={onTransitionEnd}
          ></div>
          <div
            tabindex={-1}
            class={[
              'fixed left-0 top-0 w-full h-full overflow-auto p-4 flex items-center justify-center outline-0'
            ]}
            style={{ zIndex: 1000 + key }}
            onClick={onWrapperClick}
            onKeydown={onWrapperKeydown}
            ref={wrapperRef}
          >
            <div
              class={[
                'pointer-events-auto relative m-auto',
                props.open ? 'animate-fadeInUp' : 'animate-fadeOutZoom'
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
