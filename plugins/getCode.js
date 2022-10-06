export default ({ app }, inject) => {
  const getCode = async (slug) => {
    let codeFile
    try {
      codeFile = await require(`~/code-examples/${slug}.js`)
    } finally {
      return codeFile ? codeFile : null
    }
  }
  inject('getCode', getCode)
}
