<template>
	<aside class="off-canvas-sidebar p4 bg-white" @keydown.esc="close">
		<button @click="close">Close</button>
		<div class="code-view">OFF CANVAS SIDEBAR</div>
	</aside>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			close() {
				document.querySelector('.mmd-header ').classList.remove('open-ocs')
			},
		},
	}
</script>

<style>
	.off-canvas-sidebar {
		border-left: 1px solid var(--gray-5);
		min-height: 100vh;
		overflow-y: auto;
	}
</style>