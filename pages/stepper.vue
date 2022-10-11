<template>
  <div class="gutter">
    <mmStepper v-model="model" :min="3"/>
    <mmStepper v-model="model" :step-count="2" :min="1" :max="5"/>
    <mmStepper v-model="model" disabled />
    <mmStepper v-model="modelStrict" :min="1" :max="5" strict/>
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
        modelStrict: 1,
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