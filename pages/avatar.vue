<template>
  <div class="gutter">
    <mmAccordion class="grape-bg title-6 pt-0 white" size="32px">
      TB
    </mmAccordion>
    <mmAccordion size="100px" font-size="72px" class="white grape-bg pt-2"></mmAccordion>
    <mmAccordion class="citrus-dark-bg" src="https://i.pravatar.cc/300"></mmAccordion>
    <mmAccordion class="citrus-dark-bg title-6" src="https://i.pravatar.cc/300">
      TB
    </mmAccordion>
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