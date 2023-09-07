/**
 * 全局内存唯一ID
 */
let n = 0
export function useUniqueId() {
  return ++n
}
