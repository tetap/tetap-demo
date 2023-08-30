import { computed, CSSProperties, defineComponent } from 'vue'
import spaceProps from './types'
import { getMargin, filterEmpty } from './utils'
import '../../../css/index.css'

export const Space = defineComponent({
  props: spaceProps(),
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
      if (props.direction === 'vertical') return ''
      switch (props.align) {
        case 'start':
          return 'items-start'
        case 'end':
          return 'items-end'
        case 'baseline':
          return 'items-baseline'
        case 'center':
        default:
          return 'items-center'
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
