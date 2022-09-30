<template>
	<div class="c-search-input flex a-items-center">
		<div class="search-icon">
			<i class="mmi mmi-search" aria-hidden="true"></i>
		</div>
		<label for="search" class="visually-hidden">Search</label>
		<input id="search" type="search" placeholder="Search" />
		<button @click="clearSearch">
			<i aria-hidden="true" class="mmi mmi-multiply-incircle-filled"></i>
			<span class="visually-hidden">Clear</span>
		</button>
	</div>
</template>

<script>
	export default {
		methods: {
			clearSearch() {
				console.log('clear search')
			},
		},
	}
</script>

<style>
</style>