/*
 *@description: 渐变效果
 *@author: zyc
 *@date-time: 2023-09-07 15:01:05
 */

import { Ref, ref, watch } from 'vue'

export function useTransition(show: Ref<boolean>, duration: number = 300) {
  const status = ref('')
  const display = ref(show.value)
  const inited = ref(false)
  const transitionEnded = ref(false)
  // 进入
  function enter() {
    status.value = 'enter'
    requestAnimationFrame(() => {
      if (status.value !== 'enter') {
        return
      }
      inited.value = true
      display.value = true

      requestAnimationFrame(() => {
        if (status.value !== 'enter') {
          return
        }
        transitionEnded.value = false
      })
    })
  }

  // 离开
  function leave() {
    if (!display.value) {
      return
    }

    status.value = 'leave'

    requestAnimationFrame(() => {
      if (status.value !== 'leave') {
        return
      }
      requestAnimationFrame(() => {
        if (status.value !== 'leave') {
          return
        }
        transitionEnded.value = false
        setTimeout(() => onTransitionEnd(), duration)
      })
    })
  }

  function onTransitionEnd() {
    if (transitionEnded.value) {
      return
    }
    transitionEnded.value = true
    if (!show.value && display.value) {
      display.value = false
    }
  }

  function observeShow(value: boolean, old: boolean) {
    if (value === old) {
      return
    }
    value ? enter() : leave()
  }
  // 监听打开属性是否打开
  watch(() => show.value, observeShow)

  return { onTransitionEnd, display }
}
