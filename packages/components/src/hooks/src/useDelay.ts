import { computed, onBeforeUnmount, ComputedRef, shallowRef, watch } from 'vue'

export function useDelay(delay: ComputedRef<number>, loading: ComputedRef<boolean>) {
  /** 是否处于加载效果中 */
  const innerLoading = shallowRef<boolean>(false)
  const delayTimeoutRef = shallowRef<NodeJS.Timeout | undefined>(undefined)
  /** 加载效果延迟显示 */
  const loadingOrDelay = computed(() => (delay.value && loading.value ? true : !!loading.value))

  /** 监听加载效果是否展示 */
  watch(
    loadingOrDelay,
    () => {
      clearTimeout(delayTimeoutRef.value)
      if (delay.value && loading.value) {
        delayTimeoutRef.value = setTimeout(() => {
          innerLoading.value = true
        }, delay.value || 4)
      } else {
        innerLoading.value = loadingOrDelay.value
      }
    },
    {
      immediate: true
    }
  )

  /** 销毁组件时移除定时器 */
  onBeforeUnmount(() => {
    delayTimeoutRef.value && clearTimeout(delayTimeoutRef.value)
  })
  return { innerLoading }
}
