export default ({ app }, inject) => {
  const kebabCase = (str) => {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  }
  inject('kebabCase', kebabCase)
}
