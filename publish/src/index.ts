import ghpages from 'gh-pages'
import fs from 'fs'
import path from 'path'
import copy from 'recursive-copy'
import child_process from 'child_process'
;(async () => {
  const demoFolder = path.resolve(__dirname, '../../demo')
  const folder = fs.readdirSync(demoFolder)
  const demoDist = path.resolve(__dirname, '../dist/demo')
  for (let i = 0; i < folder.length; i++) {
    const demo = folder[i]
    child_process.execSync(`cd ${demoFolder}/${demo} && pnpm run build`)
    fs.mkdirSync(path.normalize(`${demoDist}/${demo}`), { recursive: true })
    try {
      const src = path.normalize(`${demoFolder}/${demo}/dist`)
      const dts = path.normalize(`${demoDist}/${demo}`)
      await copy(src, dts, { overwrite: true })
      console.info('Copied ' + demo)
    } catch (error) {
      console.error('Copy failed: ' + error)
    }
  }
  await runMain()
  ghpages.publish('dist', function (err) {
    console.log('publish', err)
  })
})()

async function runMain() {
  const folder = path.resolve(__dirname, '../../packages/main')
  child_process.execSync(`cd ${folder} && pnpm run build`)
  const src = path.normalize(`${folder}/dist`)
  const dts = path.normalize(path.resolve(__dirname, '../dist'))
  await copy(src, dts, { overwrite: true })
}
