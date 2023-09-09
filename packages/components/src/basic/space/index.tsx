import { computed, CSSProperties, defineComponent } from 'vue'
import spaceProps, { SpaceSlot } from './types'
import { getMargin, filterEmpty } from './utils'

export const Space = defineComponent({
  name: 'TetapSpace',
  props: spaceProps(),
  slots: Object as SpaceSlot,
  setup(props, { slots }) {
    const flex = computed(() => {
      const className = []
      className.push(props.fill ? 'flex' : 'inline-flex')
      if (props.direction === 'vertical') {
        className.push('flex-col')
      }
      return className.join(' ')
    })

    const wrap = computed(() => {
      if (props.direction === 'vertical' || !props.wrap) return ''
      return 'flex-wrap'
    })

    const align = computed(() => {
      const align = props.align || (props.direction === 'vertical' ? '' : 'center')
      switch (align) {
        case 'start':
          return 'items-start'
        case 'end':
          return 'items-end'
        case 'baseline':
          return 'items-baseline'
        case 'center':
          return 'items-center'
        default:
          return ''
      }
    })
    function getMarginStyle(isLast: boolean): CSSProperties {
      const style: CSSProperties = {}
      const marginRight = `${getMargin(Array.isArray(props.size) ? props.size[0] : props.size)}`
      const marginBottom = `${getMargin(Array.isArray(props.size) ? props.size[1] : props.size)}`
      if (isLast) {
        return props.wrap ? { marginBottom } : {}
      }

      if (props.direction === 'horizontal') {
        style.marginRight = marginRight
      }

      if (props.direction === 'vertical' || props.wrap) {
        style.marginBottom = marginBottom
      }

      return style
    }

    return () => {
      const children = filterEmpty(slots.default?.())
      return (
        <div class={[flex.value, wrap.value, align.value]}>
          {children?.map((el, index) => {
            return <div style={getMarginStyle(index === children.length - 1)}>{el}</div>
          })}
        </div>
      )
    }
  }
})

export * from './types'
