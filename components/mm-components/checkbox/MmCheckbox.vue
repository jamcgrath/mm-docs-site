<template>
  <label class="flex mm-checkbox">
    <input
      type="checkbox"
      class="mm-checkbox-input"
      :disabled="disabled || false"
      :checked="checked || false"
      :indeterminate="indeterminate || false"
    />
    <div class="mm-checkbox-icon">
      <i
        class="mmi"
        :class="indeterminate ? ' mmi-minus' : 'mmi-check'"
        aria-hidden="true"
      ></i>
    </div>
    <span :class="{ disabled: disabled, 'visually-hidden' : !label }">{{ label }}</span>
  </label>
</template>

<script>
export default {
  props: {
    label: String,
    disabled: Boolean,
    indeterminate: Boolean,
    checked: Boolean,
  },
}
</script>

<style>
.mm-checkbox {
  display: grid;
  grid-template-columns: 1em auto;
  gap: 8px;
}
.mm-checkbox-input[type='checkbox'] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: #fff;
  /* Not removed via appearance */
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  position: relative;
  
  background-color: var(--grape);
}
.mm-checkbox-icon {
  display: flex;
  height: 1.25em;
  width: 1.25em;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  position: absolute;
}
.mm-checkbox-icon .mmi-check,
.mm-checkbox-icon .mmi-minus {
  font-size: 0.75em;
  color: var(--white);
}
.mm-checkbox-input[type='checkbox']:checked ~ .mm-checkbox-icon {
  transform: scale(1);
}
.mm-checkbox-input[type='checkbox']:focus-visible {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
}
.mm-checkbox-input[type='checkbox']:disabled {
  color: var(--gray-6);
  cursor: not-allowed;
  background: var(--gray-3);
  border: 1px solid currentColor;
}
.disabled {
  color: var((--gray-6));
}
</style>