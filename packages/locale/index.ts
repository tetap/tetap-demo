/*
 *@description: 异步加载语言
 *@author: zyc
 *@date-time: 2023-07-24 14:54:32
 */
export async function loadLocaleMessages(i18n: any, locale: string) {
  const messages = await import(`./langs/${locale}.json`)
  i18n.global.setLocaleMessage(locale, messages.default)
}
