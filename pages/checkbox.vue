<template>
  <div>
    <mm-checkbox ></mm-checkbox>
    <mm-checkbox class="mt-3" label="label"></mm-checkbox>
    <mm-checkbox class="mt-3" label="Disabled Checkbox" :disabled="true"></mm-checkbox>
    <mm-checkbox class="mt-3" label="indeterminate" :indeterminate="true"></mm-checkbox>
  </div>
</template>

<script>
import MmCheckbox from '~/components/mm-components/checkbox/MmCheckbox.vue'
export default {
  layout: 'layout-components',
  components: {
    MmCheckbox,
  },
}
</script>

<style>
</style>