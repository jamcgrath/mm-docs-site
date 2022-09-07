<template>
	<header
		class="
			mmd-header
			bg-bw-primary
			white
			px-4
			py-1_5
			fw-6
			flex
			j-content-between
			a-items-center
		"
		ref="header"
	>
		<h1 class="title-6">MM-Docs</h1>
		<div class="mmd-header-buttons">
			<nuxt-link to="/components" class="white body_link mx-3"
				>Components</nuxt-link
			>
			<nuxt-link to="/" class="white body_link mx-3">CSS</nuxt-link>
			<!-- <button class="mmd-header-button_code cursor-pointer" @click="openOffCanvas">
				<span class="icon-code" aria-hidden="true"></></span>
				<span class="visually-hidden">Open Code View</span>
			</button> -->
		</div>
	</header>
</template>

<script>
	export default {
		methods: {
			openOffCanvas() {
				this.$refs.header.classList.add('open-ocs')
			},
		},
	}
</script>

<style scoped>
	.mmd-header-buttons button {
		background: transparent;
		border: 0;
		color: inherit;
		padding: 0;
		min-width: 40px;
	}
	.icon-code {
		font-family: monospace;
		font-size: 14px;
		font-weight: 800;
	}
</style>