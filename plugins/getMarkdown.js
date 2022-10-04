export default ({ app }, inject) => {
  const getMarkdown = async (slug) => {
    let markdownFile
    try {
      markdownFile = await require(`~/markdown/${slug}.md`)
    } finally {
      return markdownFile ? markdownFile.default : null
    }
  }
  inject('getMarkdown', getMarkdown)
}
