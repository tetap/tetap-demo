import { defineComponent } from 'vue'

export const CloseOutlined = defineComponent({
  name: 'TetapCloseOutlined',
  setup() {
    return () => (
      <svg viewBox="0 0 1024 1024" version="1.1" width="1em" height="1em">
        <path
          d="M567.68 511.914667l254.805333-254.634667a39.253333 39.253333 0 0 0 0-55.594667 39.253333 39.253333 0 0 0-55.594666 0L512 456.192 257.109333 201.6a39.253333 39.253333 0 0 0-55.594666 0 39.253333 39.253333 0 0 0 0 55.594667l254.805333 254.592-254.805333 254.72a39.253333 39.253333 0 0 0 27.776 67.072c10.112 0 20.096-3.797333 27.818666-11.477334L512 567.509333l254.890667 254.72c7.68 7.68 17.706667 11.477333 27.818666 11.477334a39.253333 39.253333 0 0 0 27.818667-67.114667l-254.848-254.72z"
          fill="currentColor"
        ></path>
      </svg>
    )
  }
})