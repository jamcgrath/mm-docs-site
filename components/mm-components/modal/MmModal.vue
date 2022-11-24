<template>
  <div v-if="value" :id="id || randomId" class="mm-modal-backdrop" @click="close">
    <div class="mm-modal" tabindex="-1" role="dialog" aria-labelledby="modal dialog" @click.stop="" :style="styles">
      <div class="mm-modal-head" :class="$slots.head && 'title-5'" v-if="!!$slots.head || !hideClose">
        <slot name="head"></slot>
        <button type="button" class="btn btn-med mm-modal-close" @click="close" v-if="!hideClose">
          <i aria-hidden="true" class="mmi mmi-close mm-modal-close-icon"></i>
          <span class="visually-hidden">Close</span>
        </button>
      </div>
      <div v-if="!!$slots.base" class="mm-modal-base body">
        <slot name="base"></slot>
      </div>
      <div v-if="!!$slots.action" class="mm-modal-action">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: String,
    value: {
      type: Boolean,
      default: false,
    },
    width: [String, Number],
    hideClose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      randomId: null,
      backElementFocus: null
    }
  },
  mounted() {
    if (!this.id) {
      this.randomId = this.$nanoid()
    }
  },
  methods: {
    close() {
      this.$emit('input', false)
    },
    handleTrapEvent(lastFocusableElement, firstFocusableElement) {
      return (event) => {
        const isTabPressed = event.key === 'Tab' || event.keyCode === 9

        if (!isTabPressed) {
          return
        }

        if (event.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus()
            event.preventDefault()
          }
        } else if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus()
          event.preventDefault()
        }
      }
    },
    addTrapHandler(element) {
      const focusableElements =
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      const firstFocusableElement = element.querySelector(focusableElements)
      const focusableContent = element.querySelectorAll(focusableElements)
      const lastFocusableElement = focusableContent[focusableContent.length - 1]

      document.addEventListener(
        'keydown',
        this.handleTrapEvent(lastFocusableElement, firstFocusableElement)
      )
    },
  },
  watch: {
    value(newValue) {
      if (newValue) {
        this.backElementFocus = document.activeElement;
        this.$nextTick(() => {
          document.addEventListener('keydown', (event) => {
            const isEscapePressed =
              event.key === 'Escape' || event.keyCode === 27
            if (isEscapePressed) {
              this.close()
            }
          })
          const element = document.getElementById(this.id || this.randomId)
          element.querySelector('.mm-modal').focus()
          this.addTrapHandler(element)
        })
        document.querySelector('body').classList.add('overflow-hidden')
      } else {
        document.querySelector('body').classList.remove('overflow-hidden')
        this.backElementFocus.focus()
      }
    },
  },
  computed: {
    styles() {
      if (this.width) {
        return {
          width: this.width + 'px'
        }
      }
    }
  }
}
</script>
<style scoped>
.mm-modal-backdrop {
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  inset: 0;
  z-index: 998;
  top: 0;
  left: 0;
}

.mm-modal {
  margin: 1.75rem auto;
  position: relative;
  width: 573px;
  z-index: 999;
  outline: none;
  background: var(--white);
  border-radius: 8px;
  padding: 28px 32px;
}

.mm-modal-close {
  position: absolute;
  width: 40px;
  height: 40px;
  right: -24px;
  top: -20px;
}

.mm-modal-close-icon {
  color: var(--gray-7);
  font-size: 1.5rem;
}

.mm-modal-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  color: var(--navy-dark);
}

.mm-modal-head,
.mm-modal-base,
.mm-modal-action {
  position: relative;
  width: 100%;
  padding: 20px 0;
}
</style>
