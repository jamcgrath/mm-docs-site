<template>
  <textarea
    class="mm-textarea label"
    :class="{ 'resize-none': !resize }"
    :style="styles"
    :form="form"
    :aria-label="label"
    :placeholder="label"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    :minlength="minlength"
    :maxlength="maxlength"
    :autocomplete="autocomplete"
    :spellcheck="spellcheck"
    :value="value"
    @input="$emit('input', $event.target.value)"
  ></textarea>
</template>
<script>
export default {
  props: {
    value: String,
    form: String,
    label: String,
    minlength: [Number, String],
    maxlength: [Number, String],
    autocomplete: {
      type: String,
      default: 'off',
    },
    spellcheck: {
      type: [Boolean, String],
      default: 'default',
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    resize: {
      type: Boolean,
      default: true,
    },
    width: [Number, String],
    height: {
      type: [Number, String],
      default: 120,
    },
  },
  computed: {
    styles() {
      const styles = {}
      if (this.width) styles.width = this.width + 'px'
      if (this.height) styles.height = this.height + 'px'
      return styles
    },
  },
}
</script>
<style scoped>
.mm-textarea {
  width: 100%;
  min-height: 120px;
  border-radius: 12px;
  color: var(--navy-dark);
  border: 1px solid var(--gray-4);
  padding: 12px 16px 0 16px;
}

.mm-textarea:hover {
  border: 1px solid var(--navy-hover);
}

.mm-textarea:focus,
.mm-textarea:active {
  outline: none;
  border: 1px solid var(--gray-4);
}

.mm-textarea:disabled {
  color: var(--gray-6);
  background: var(--gray-4);
}

.mm-textarea:valid {
  border: 1px solid var(--success);
}

.mm-textarea:invalid {
  border: 1px solid var(--error);
}
</style>
