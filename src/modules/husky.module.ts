import { blue, bold, cyan } from 'chalk'
import { execSync } from 'child_process'
import constants from '../constants'

const createHuskyConfiguration = async (): Promise<void> => {
  console.info(
    cyan(
      `Sir, ${blue(
        bold(`${constants.username}`)
      )}... 🙋🏻 FYI to use husky, I will install husky package for you... so relax and 🤌🏻`
    )
  )
  await execSync('yarn add -D husky pretty-quick')
  await execSync('npm set-script prepare "husky install"')
  await execSync('npm set-script format:quick ""format:quick": "pretty-quick --staged","')
  await execSync('yarn prepare')
  await execSync('npx husky add .husky/pre-commit "npm run format:quick && npm run lint"')

  console.group(`I am finished Sir, and Here's Husky Report`)
  console.log('✅ installed husky / pretty-quick packages')
  console.log('✅ Edit package.json > prepare script and run prepare script once')
  console.log('✅ Add a hook: for pre-commit')
  console.groupEnd()
}

export default createHuskyConfiguration
