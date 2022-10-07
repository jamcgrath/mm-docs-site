<template>
  <div class="gutter">
    <mmAccordion class="white">
      TB
    </mmAccordion>
    <mmAccordion class="white"></mmAccordion>
    <mmAccordion></mmAccordion>
  </div>
</template>
<script>
  import MmAccordion from '~/components/mm-components/avatar/MmAvatar.vue'
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