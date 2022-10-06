<template>
  <div class="gutter">
    <mmAccordion initial-open="true">
      Trinmar Pogi talaga!
    </mmAccordion>
    <mmAccordion class="pt-5"></mmAccordion>
    <mmAccordion class="pt-5"></mmAccordion>
  </div>
</template>
<script>
  import MmAccordion from '~/components/mm-components/accordion/MmAccordion.vue'
	export default {
		layout: 'layout-components',
    components: {
      MmAccordion
    }
	}
</script>

<style scoped>
.gutter {
  column-gap: 20px;
  row-gap: 20px;
}
</style>