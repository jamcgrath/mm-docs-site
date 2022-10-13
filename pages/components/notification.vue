<template>
	<div class="gutter">
		<MmNotification label="Trinmar Pogi" sub-label="ang pogi"/>
		<MmNotification read />
		<MmNotification v-model="model" disabled />
		<MmNotification label="Trinmar Pogi" sub-label="ang pogi"/>
	</div>
</template>
<script>
	// import MmNotification from '~/components/mm-components/notification/MmNotification.vue'
	export default {
		layout: 'layout-components',
		components: {
			// MmNotification,
		},
		data() {
			return {
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