export default ({ app }, inject) => {
  const copyToClipboard = async (copyText = '') => {
    const el = event.target
    const text = el.dataset.copy || copyText
    const clipboardText = text[0] === '.' ? text.slice(1) : text

    try {
      await navigator.clipboard.writeText(clipboardText)
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
