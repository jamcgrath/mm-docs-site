<template>
  <div
    v-if="value"
    :id="id || randomId"
    class="mm-modal-backdrop"
    @click="close"
  >
    <div class="mm-modal" tabindex="-1" role="dialog" @click.stop="">
      <div class="mm-modal-head title-5">
        <slot name="head"></slot>
        <button
          type="button"
          class="btn btn-med btn-circle mm-modal-close"
          @click="close"
        >
          <i aria-hidden="true" class="mmi mmi-close mm-modal-close-icon"></i>
          <span class="visually-hidden">Close</span>
        </button>
      </div>
      <div class="mm-modal-base body">
        <slot name="base"></slot>
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
  },
  data() {
    return {
      randomId: null,
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
      }
    },
  },
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
  width: 500px;
  min-height: 214px;
  z-index: 999;
}

.mm-modal-close {
  background: var(--gray-3);
  border-radius: 100px;
  position: absolute;
  width: 32px;
  height: 32px;
  right: 16px;
  top: 16px;
}

.mm-modal-close-icon {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 8px;
  top: 8px;
}

.mm-modal-head {
  width: 100%;
  min-height: 80px;
  border: 1px solid var(--gray-3);
  border-radius: 8px 8px 0px 0px;
  display: flex;
  position: relative;
  background: var(--white);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  font-weight: 600;
  color: var(--navy-dark);
}

.mm-modal-base {
  position: relative;
  width: 100%;
  min-height: 134px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: var(--gray-3);
  border-radius: 0px 0px 8px 8px;
  background: var(--white);
  padding: 24px 32px;
}
</style>
