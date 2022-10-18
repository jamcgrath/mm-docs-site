<template>
	<div class="gutter">
		<mmFlag class="mb-2" title="Trinmar Pogi" no-close />
		<mmFlag class="mb-2" title="Trinmar Pogi" body="Success huhuhu" type="success" button="No Event" />
		<mmFlag class="mb-2" type="error" title="Error" body="error hahaaha" button="click me"
			@buttonClick="log('Error!')" @closeClick="log('oh oh!')" />
		<mmFlag class="mb-2" type="info" title="Information" body="info :(" button="click me"
			@buttonClick="log('Info!')" @closeClick="log('oh oh!')" />
		<mmFlag class="mb-2" title="Trinmar Pogi" body="pogi ko talga" type="warning" no-close />
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