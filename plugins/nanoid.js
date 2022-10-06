import { nanoid } from 'nanoid'

export default (context, inject) => {
  // Inject in Vue, context and store.
  inject('nanoid', nanoid)
  // For Nuxt <= 2.12, also add 👇
  context.$nanoid = nanoid
}