export default ({ app }, inject) => {
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
        let updatedRules
        if (cssMap.has(name)) {
          updatedRules = cssMap.get(name)
        }
        cssMap.set(selector, { ...rules, ...updatedRules })
      })
    }
    return cssMap
  }
  inject('mapStyles', mapStyles)
}