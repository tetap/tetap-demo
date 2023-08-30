import { defineComponent } from 'vue'
import '../../../css/index.css'

export const Button = defineComponent({
  setup() {
    return () => (
      <button
        class="
        rounded-md
        px-3.5
        py-2.5
        text-sm
        font-semibold
        transition
        outline-none
        select-none
        text-white
        bg-indigo-600
        hover:bg-indigo-500
        active:bg-indigo-700
        focus:outline-indigo-700
        focus-visible:outline-indigo-700
        focus-visible:bg-indigo-700
      "
      >
        Get started
      </button>
    )
  }
})
