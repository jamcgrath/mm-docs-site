<template>
	<div>
		<mm-input-search v-model="searchText"></mm-input-search>
	</div>
</template>

<script>
	import MmInputSearch from '~/components/mm-components/MmInputSearch.vue'
	export default {
		layout: 'layout-components',
		components: { MmInputSearch },
		data() {
			return {
				searchText: '',
			}
		},
	}
</script>

<style>
</style>