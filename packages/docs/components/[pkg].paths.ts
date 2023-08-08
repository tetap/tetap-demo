import fs from 'fs'
import fast from 'fast-glob'
import path from 'path'

export default {
  paths() {
    const files = fast.sync('../components/src/**/*.md')
    return files.map((file) => {
      const content = fs.readFileSync(file, { encoding: 'utf-8' })
      const name = path.dirname(file).split('/').pop()?.toLowerCase()
      return {
        params: { pkg: name },
        content
      }
    })
  }
}
