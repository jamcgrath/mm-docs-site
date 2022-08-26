<template>
	<aside class="main-sidebar p-4">
		<nav role="navigation">
			<ul class="list-reset">
				<li>
					<nuxt-link to="/colors">Colors</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/typography">Typography</nuxt-link>
				</li>
			</ul>
		</nav>
	</aside>
</template>

<script>
	export default {
		data() {
			return {}
		},
	}
</script>

<style>
	.main-sidebar {
		border-right: 1px solid var(--gray-5);
	}
</style>