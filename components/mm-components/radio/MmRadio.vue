<template>
  <div class="mm-radio">
    <input
      class="mm-radio-input"
      type="radio"
      :name="name"
      :id="getId"
      :value="radioValue"
      :checked="isChecked"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    />
    <label
      :for="getId"
      :class="{ disabled: disabled, 'visually-hidden': !label }"
      >{{ label }}</label
    >
  </div>
</template>
<script>
export default {
  props: {
    id: String,
    label: String,
    name: String,
    value: [Number, String],
    radioValue: [Number, String],
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
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
  computed: {
    getId() {
      return this.id || this.randomId
    },
    isChecked() {
      if (this.radioValue) {
        return this.radioValue === this.value ? true : false
      }
      return this.checked
    }
  },
}
</script>
<style scoped>
.mm-radio {
  display: grid;
  grid-template-columns: 1em auto;
  gap: 8px;
}

.mm-radio-input[type='radio'] {
  background: var(--white);
  border-radius: 100%;
  border: 1px solid var(--gray-6);
  -webkit-appearance: none;
  appearance: none;
  width: 1.25em;
  height: 1.25em;
}

.mm-radio-input[type='radio']:checked {
  transition: border 120ms ease-in-out;
  border: 7px solid var(--grape);
}

.mm-radio-input[type='radio']:disabled {
  background: var(--gray-3);
  cursor: not-allowed;
}

.mm-radio-input[type='radio'][disabled]:checked {
  background: var(--gray-6);
  border: 7px solid var(--gray-3);
  box-shadow: 0 0 0 1px var(--gray-6);
}

.mm-radio-input[type='radio']:focus-visible {
  outline: 2px solid var(--grape-hover);
  outline-offset: 2px;
}

.disabled {
  color: var(--gray-6);
}
</style>
