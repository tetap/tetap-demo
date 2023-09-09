export const isDef = <T>(val: T): val is NonNullable<T> => val !== undefined && val !== null

export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

export const isFunction = (val: unknown): val is Function => typeof val === 'function'

export function get(object: any, path: string): any {
  const keys = path.split('.')
  let result = object

  keys.forEach((key) => {
    result = isObject(result) ? result[key] ?? '' : ''
  })

  return result
}

const camelizeRE = /-(\w)/g

export function camelize(str: string): string {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}
