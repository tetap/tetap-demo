import { defineComponent } from 'vue'
import { SpinOutlined } from './SpinOutlined'
import '../../../../css/index.css'

export const Spin = defineComponent({
  name: 'TetapSpin',
  setup() {
    return () => (
      <div
        class={'animate-spin'}
        style="animation-duration: 1s !important;animation-iteration-count: infinite !important;"
      >
        <SpinOutlined />
      </div>
    )
  }
})
