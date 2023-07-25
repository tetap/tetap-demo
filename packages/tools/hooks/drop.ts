import { ref } from 'vue'
import { FileUtils } from '../file'

export function useDrop(extensions: string[], callback: (file: File) => void) {
  const isDown = ref(false)
  function dragover(e: DragEvent) {
    e.preventDefault()
    isDown.value = true
  }
  function dragleave() {
    isDown.value = false
  }
  function drop(e: DragEvent) {
    e.preventDefault()
    dragleave()
    const transfer = e.dataTransfer
    if (!transfer) return
    const file = transfer.files?.[0]
    if (!file) return
    if (FileUtils.checkFileSuffix(file, extensions)) return
    callback(file)
  }
  function click() {
    FileUtils.selectFile(extensions, 'Tetap').then((file) => {
      if (FileUtils.checkFileSuffix(file, extensions)) return
      callback(file)
    })
  }
  return { isDown, dragover, dragleave, drop, click }
}
