export default ({ app }, inject) => {
  const copyToClipboard = async (e) => {
    const el = e.target
    const text = el.dataset.item
    try {
      await navigator.clipboard.writeText(text)
      el.classList.add('copied')
    } catch (err) {
      console.error('Failed to copy text: ', err)
    } finally {
      setTimeout(() => {
        el.classList.remove('copied')
      }, 1000)
    }
  }
  inject('copyToClipboard', copyToClipboard)
}
