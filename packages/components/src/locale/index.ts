import { ref, reactive, camelize } from 'vue'
import { deepAssign } from './utils/deep-assign'
import { get, isFunction } from './utils/basic'
import defaultMessages from './langs/zh-CN'

type Message = Record<string, any>
type Messages = Record<string, Message>

const lang = ref('zh-CN')

const messages = reactive<Messages>({
  'zh-CN': defaultMessages
})

export const Locale = {
  messages(): Message {
    return messages[lang.value]
  },

  use(newLang: string, newMessages?: Message) {
    lang.value = newLang
    this.add({ [newLang]: newMessages })
  },

  add(newMessages: Message = {}) {
    deepAssign(messages, newMessages)
  }
}

export function createTranslate(name: string) {
  const prefix = camelize(`tetap-${name}`) + '.'

  return (path: string, ...args: unknown[]) => {
    const messages = Locale.messages()
    const message = get(messages, prefix + path) || get(messages, path)

    return isFunction(message) ? message(...args) : message
  }
}

export const useCurrentLang = () => lang

export default Locale
