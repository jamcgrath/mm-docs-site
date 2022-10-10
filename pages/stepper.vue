<template>
  <div class="gutter">
    <mmStepper v-model="model" :min="3"/>
    <mmStepper v-model="model" :min="1" :max="5"/>
    <mmStepper v-model="model" disabled />
  </div>
</template>
<script>
  import mmStepper from '~/components/mm-components/stepper/MmStepper.vue'
	export default {
		layout: 'layout-components',
    components: {
      mmStepper
    },
    data () {
      return {
        model: 0,
      }
    }
	}
</script>

<style scoped>
.gutter {
  column-gap: 20px;
  row-gap: 20px;
}
</style>