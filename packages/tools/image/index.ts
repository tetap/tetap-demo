export const ImageUtils = Object.freeze({
  /**
   * 加载图像
   * @param src
   * @returns
   */
  load(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      if (!src) return reject('src empty')
      const image = new Image()
      image.onload = () => {
        image.onload = null
        image.onerror = null
        resolve(image)
      }
      image.onerror = (e) => {
        image.onload = null
        image.onerror = null
        reject(e)
      }
      image.src = src
      if (image.complete) {
        image.onload = null
        image.onerror = null
        resolve(image)
      }
    })
  },
  /**
   * 等比缩放图片到指定尺寸， 只返回尺寸
   * @param image
   * @param toWidth
   * @param toHeight
   */
  scaleImageRect(image: HTMLImageElement, toWidth: number, toHeight: number) {
    const { width: imageWidth, height: imageHeight } = image
    const scale = Math.min(toWidth / imageWidth, toHeight / imageHeight)
    const width = Math.floor(imageWidth * scale)
    const height = Math.floor(imageHeight * scale)
    const y = Math.floor((toHeight - height) / 2)
    const x = Math.floor((toWidth - width) / 2)
    return { width, height, x, y }
  }
})
