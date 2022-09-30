<template>
	<div>
		<mm-input-search v-model="searchText"></mm-input-search>
	</div>
</template>

<script>
	import MmInputSearch from '~/components/mm-components/MmInputSearch.vue'
	export default {
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