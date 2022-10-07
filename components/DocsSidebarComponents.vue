<template>
	<aside class="main-sidebar p-4">
		<nav role="navigation">
			<ul class="list-reset">
				<li v-for="(item, index) in componentList" :key="index" class="mt-3">
					<nuxt-link :to="`/${item.url}`">{{ item.name }}</nuxt-link>
				</li>
			</ul>
		</nav>
	</aside>
</template>

<script>
	export default {
		data() {
			return {
				componentList: [
					{
						name: 'Accordion',
						url: 'accordion',
					},
					{
						name: 'Avatar',
						url: 'avatar',
					},
					{
						name: 'Tabs',
						url: 'tabs',
					},
				],
			}
		},
	}
</script>
