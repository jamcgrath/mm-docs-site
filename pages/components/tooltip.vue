<template>
	<div class="tooltip-container-gray">
    <button 
      class="btn btn-primary btn-lg information-button" 
      :aria-describedby="tooltipId" 
      @mouseover="showTip = true" 
      @mouseleave="showTip = false"
      @focus="showTip = true" 
			@blur="showTip = false">
       I should show a tooltip
    </button>
		<mm-tooltip :tooltipId="tooltipId" :showTip="showTip" align="left"></mm-tooltip>
	</div>
</template>

<script>
  import MmTooltip from '~/components/mm-components/tooltip/MmTooltip.vue'
	export default {
		layout: 'layout-components',
		components: { MmTooltip },
		data() {
			return {
        tooltipId:'btn-desc-tip',
        showTip: false
			}
		},
	}
</script>

<style>
.tooltip-container-gray {
  background-color: var(--gray-2);
  height:800px;
}
.information-button {
  margin:10px;
}
</style>