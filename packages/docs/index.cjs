const child_process = require('child_process')

const COMMAND = `npm run watch`
child_process.execSync(COMMAND, { stdio: 'inherit' })
