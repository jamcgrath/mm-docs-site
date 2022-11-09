<template>
  <textarea
    class="mm-textarea label"
    :style="styles"
    :form="form"
    :placeholder="label"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    :maxlength="maxlength"
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
    maxlength: [Number, String],
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
  color: var(--gray-7);
  border: 1px solid var(--gray-4);
  padding: 12px 16px 0 16px;
}

.mm-textarea:hover {
  border: 1px solid var(--navy-hover);
  color: var(--gray-7);
}

.mm-textarea:focus,
.mm-textarea:active {
  outline: none;
  border: 1px solid var(--gray-4);
  color: var(--navy-dark);
}

.mm-textarea:disabled {
  color: var(--gray-6);
  background: var(--gray-4);
}

.success {
  border: 1px solid var(--success);
  color: var(--navy-dark);
}

.error {
  border: 1px solid var(--error);
  color: var(--navy-dark);
}
</style>
