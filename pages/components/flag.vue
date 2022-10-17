<template>
	<div class="gutter">
    <mmFlag class="mb-2" title="Trinmar Pogi" />
    <mmFlag class="mb-2" icon="mmi mmi-multiply-incircle-filled error" title="Error" body="error hahaaha" />
		<mmFlag class="mb-2" icon="mmi mmi-check-circle-filled success" title="Success" body="Success huhuhu"
      button="click me" @buttonClick="log('ahhh!')" has-close @closeClick="log('oh oh!')" />
	</div>
</template>
<script>
	import mmFlag from '~/components/mm-components/flag/MmFlag.vue'
	export default {
		layout: 'layout-components',
		components: {
			mmFlag,
		},
		data() {
			return {
        log: console.log,
				test: 0,
				model: 0,
				modelStrict: 1,
			}
		},
	}
</script>

<style scoped>
	.gutter {
		column-gap: 20px;
		row-gap: 20px;
	}
</style>