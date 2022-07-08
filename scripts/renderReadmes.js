#!/usr/bin/env node

// 1. find all the files called `README.md.tpl` in the current directory
// for each template file:
//    2. Find all the `.js` and `.ts` example files in the same directory
//    3. Process all the example files and split them into "description", "code" and "type" ("js" or "ts")
//    4. Generate markdown code that displays all the examples
//    5. for each file, replace the `{{examples}}` placeholder with the generate markdown content of all the examples in that folder

import { readFile, writeFile } from 'fs/promises'
import { dirname, extname, basename } from 'path'
import { promisify } from 'util'
import globCb from 'glob'
import mustache from 'mustache'

const glob = promisify(globCb)

const sheBangRegex = /^#!.*\n*$/mg
const eslintcommentRegex = /^\/\*\s*eslint\s+.+\s*\*\/\n*$/mg
const descriptionRegex = /\n*\/\*\n(.+)\*\/\n/ms

async function processExample (filePath) {
  const fileContent = await readFile(filePath, 'utf8')

  const name = basename(filePath)

  // cleans up the content:
  // removes eslint comments and lines starting with #!
  const content = fileContent
    .replace(sheBangRegex, '')
    .replace(eslintcommentRegex, '')

  // extracts the description from the content
  const descriptionMatch = content.match(descriptionRegex)
  const description = descriptionMatch ? descriptionMatch[1].trim() : ''

  // removes the description from the content to get the code
  const code = content.replace(descriptionRegex, '').trim()

  const type = extname(filePath).slice(1)
  return { name, filePath, type, description, code }
}

function generateExamplesMarkdown (examplesData) {
  const examples = examplesData.map(example => {
    const { name, filePath, type, description, code } = example
    return `
## [\`${name}\`](./${name})

${description}

\`\`\`${type}
${code}
\`\`\`

> Execute this example with:
>
> \`\`\`bash
> ${type === 'ts' ? 'ts-' : ''}node ${filePath}
> \`\`\`
`
  }).join('\n')

  return examples
}

function generateNavigationMarkdown (readmes, current) {
  const index = readmes.indexOf(current)
  const prev = readmes[index - 1]
  const next = readmes[index + 1]

  const prevLink = prev ? `[⬅️ ${dirname(prev)}](/${dirname(prev)}/README.md)` : '  '
  const homeLink = '[🏠](/README.md)'
  const nextLink = next ? `[${dirname(next)} ➡️](/${dirname(next)}/README.md)` : '  '

  const markdown = `
| ${prevLink} | ${homeLink} | ${nextLink} |
|:${'-'.repeat(prevLink.length)}|:${'-'.repeat(homeLink.length - 1)}:|${'-'.repeat(nextLink.length)}:|
`
  return markdown
}

const readmes = await glob('**/README.md.tpl')

for (const readme of readmes) {
  const dir = dirname(readme)
  const dest = `${dir}/README.md`
  console.log(dest)

  const examples = (await glob(`./${dir}/*.{js,ts}`))
    .filter(pathName => !basename(pathName).startsWith('_')) // removes files which name starts for "_"

  const examplesData = await Promise.all(examples.map(processExample))
  const examplesMarkdown = generateExamplesMarkdown(examplesData)
  const navigationMarkdown = generateNavigationMarkdown(readmes, readme)

  const view = {
    examples: examplesMarkdown,
    navigation: navigationMarkdown
  }

  const readmeTemplate = await readFile(readme, 'utf8')
  const readmeComment = '<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->\n\n'
  const readmeContent = mustache.render(readmeTemplate, view)

  await writeFile(dest, readmeComment + readmeContent)
}
