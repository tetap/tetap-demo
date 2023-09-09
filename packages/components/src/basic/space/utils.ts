import { Fragment, VNode } from 'vue'

export function filterEmpty(children: VNode[] = []) {
  const nodes: VNode[] = []
  children.forEach((child) => {
    if (Array.isArray(child)) {
      nodes.push(...child)
    } else if (child.type === Fragment) {
      nodes.push(...filterEmpty(child.children as VNode[]))
    } else {
      nodes.push(child)
    }
  })
  return nodes.filter(
    (c) =>
      !(
        c &&
        (c.type === Comment ||
          (c.type === Fragment && c.children?.length === 0) ||
          (c.type === Text && (c.children as string).trim() === ''))
      )
  )
}

export function getMargin(size: string | number) {
  if (typeof size === 'number') {
    return size + 'px'
  }
  return size
}
