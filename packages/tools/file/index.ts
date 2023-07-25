export const FileUtils = Object.freeze({
  /**
   * 加载图片
   * @param hook 通过回调设置需要的文件返回类型 fileReader.readAsDataURL(file)
   */
  loadFile<T = string | ArrayBuffer>(hook: (fileReader: FileReader) => void): Promise<T> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.onload = (e) => {
        fileReader.onload = null
        fileReader.onabort = null
        fileReader.onerror = null
        const result = e.target?.result
        if (!result) return reject(e)
        resolve(result as unknown as T)
      }
      fileReader.onabort = fileReader.onerror = (e) => {
        fileReader.onload = null
        fileReader.onabort = null
        fileReader.onerror = null
        reject(e)
      }
      hook(fileReader)
    })
  },
  /**
   * 校验文件类型
   * @param file
   * @param type
   */
  checkFileType(file: File, type: string[]) {
    const { type: fileType } = file
    for (let i = 0; i < type.length; i++) {
      if (fileType?.startsWith(type[i])) {
        return true
      }
    }
    return false
  },
  /**
   * 校验文件后缀
   * @param file
   * @param suffix
   */
  checkFileSuffix(file: File, suffixs: string[]) {
    const { name } = file
    const extension = name.split('.').pop()?.toUpperCase()
    for (let i = 0; i < suffixs.length; i++) {
      if (extension === suffixs[i]?.toUpperCase()) {
        return true
      }
    }
    return false
  },
  /**
   * 选择文件
   * @param extensions 扩展名
   * @param description 描述
   */
  async selectFile(extensions: string[], description: string) {
    const { fileOpen } = await import('browser-fs-access')
    return await fileOpen({ extensions, description, excludeAcceptAllOption: false })
  },
  /**
   * arrayBuffer转blob URL
   * @param buffer
   * @param type
   * @returns
   */
  arrayBufferToBlob(buffer: ArrayBuffer, type: string) {
    return FileUtils.blobToUrl(new Blob([buffer], { type }))
  },
  /**
   * base64转blob
   * @param base64
   */
  base64ToBlob(base64: string) {
    const arr = base64.split(',')
    const mime = arr[0].match(/:(.*?);/)![1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) u8arr[n] = bstr.charCodeAt(n)
    return new Blob([u8arr], { type: mime })
  },
  // blob转base64
  blobToBase64(blob: Blob) {
    return FileUtils.loadFile<string>((fileReader) => fileReader.readAsDataURL(blob))
  },
  /**
   * blob转url
   * @param blob
   * @returns
   */
  blobToUrl(blob: Blob) {
    return URL.createObjectURL(blob)
  },
  /**
   * 删除blob url
   * @param url
   */
  revokeUrl(url: string) {
    URL.revokeObjectURL(url)
  }
})
