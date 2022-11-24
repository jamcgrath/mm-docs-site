<template>
	<div class="gutter">
		<mmAccordion class="pt-5">
			<template v-slot:title> title-test </template>
			<template v-slot:content>bork</template>
		</mmAccordion>
		<mmAccordion class="pt-5" initial-open="true"
			><template v-slot:title> title-test 1 </template>
			<template v-slot:content>bork 2</template></mmAccordion
		>
		<mmAccordion class="pt-5">
			<template v-slot:title> title-test 2</template>
			<template v-slot:content>bork 2</template>
		</mmAccordion>
	</div>
</template>
<script>
	import MmAccordion from '~/components/mm-components/accordion/MmAccordion.vue'
	export default {
		layout: 'layout-components',
		components: {
			MmAccordion,
		},
	}
</script>

<style scoped>
	.gutter {
		column-gap: 20px;
		row-gap: 20px;
	}
</style>