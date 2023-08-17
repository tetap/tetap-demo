import fs from 'fs'

function generateSidebar() {
  const dirs = fs.readdirSync('../components/src')
  const sidebar = {}
  dirs.forEach((dir) => {
    console.log(dir)
  })
  return sidebar
}

generateSidebar()
export default {
  '/components/': [
    {
      text: '通用',
      items: [{ text: 'Button', link: '/components/button.md' }]
    }
  ]
}
