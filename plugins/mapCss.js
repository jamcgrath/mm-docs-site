export default ({ app }, inject) => {
  //trim white space and determine if end of string has a comma and remove it
  const trimClass = (s) => {
    const sTrimed = s.trim()
    const end =
      sTrimed[sTrimed.length - 1] === ',' ? sTrimed.length - 1 : s.length
    return sTrimed.slice(1, end)
  }
  const mapStyles = (cssJson) => {
    const cssMap = new Map()
    for (const sel in cssJson) {
      const selArray = sel.split(/\n/)
      const rules = cssJson[sel]

      selArray.forEach((s) => {
        const selector = trimClass(s)
        if (selector.includes('media')) {
          return
        }
        const name = selector.split('_')[0]
        if (cssMap.has(name)) {
          cssMap.set(selector, { ...cssMap.get(name), ...rules })
        } else {
          cssMap.set(selector, rules)
        }
      })
    }
    return cssMap
  }
  inject('mapStyles', mapStyles)
}
