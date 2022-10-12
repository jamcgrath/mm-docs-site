<template>
  <div class="gutter">
    <mmAccordion size="32px" initials="TB" class="grape-bg title-6 pt-0 white" />
    <mmAccordion size="100px" font-size="72px" anonymous="true" class="white citrus-dark-bg pt-2" />
    <mmAccordion src="https://i.pravatar.cccccc/300" initials="TB" class="citrus-dark-bg" with-img-error /> 
    <mmAccordion src="https://i.pravatar.cc/300" initials="TB" class="citrus-dark-bg title-6" />
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