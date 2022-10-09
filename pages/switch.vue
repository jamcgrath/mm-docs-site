<template>
  <div class="gutter">
    <mmSwitch v-model="model"/>
    <mmSwitch v-model="model" disabled />
  </div>
</template>
<script>
  import mmSwitch from '~/components/mm-components/switch/MmSwitch.vue'
	export default {
		layout: 'layout-components',
    components: {
      mmSwitch
    },
    data () {
      return {
        model: false,
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