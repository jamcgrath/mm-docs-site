export default ({ app }, inject) => {
  const getMarkdown = async (slug) => {
    let markdownFile
    let codeFile
    try {
      markdownFile = await require(`~/markdown/${slug}.md`)
      codeFile = await require(`~/code-examples/${slug}.js`)
      // console.log(codeFile)
    } finally {
      const markdown = markdownFile ? markdownFile.default : null
      const codeExample = codeFile ? codeFile : null
      return { slug, markdown, codeExample }
    }
  }
  inject('getMarkdown', getMarkdown)
}
