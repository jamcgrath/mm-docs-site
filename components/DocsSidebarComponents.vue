<template>
	<aside class="main-sidebar p-4">
		<nav role="navigation">
			<ul class="list-reset">
				<li v-for="(item, index) in componentList" :key="index" class="mt-3">
					<nuxt-link :to="`/components/${item.url}`">{{ item.name }}</nuxt-link>
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
						name: 'Pagination',
						url: 'pagination',
					},
					{
						name: 'Stepper',
						url: 'stepper',
					},
					{
						name: 'Switch',
						url: 'switch',
					},
					{
						name: 'Tabs',
						url: 'tabs',
					},
					{
						name: 'Buttons',
						url: 'buttons',
					},
					{
						name: 'Search',
						url: 'search',
					},
					{
						name: 'Social Media Links',
						url: 'socialLink',
					},
					{
						name: 'Checkbox',
						url: 'checkbox',
					},
					{
						name: 'Breadcrumbs',
						url: 'breadcrumbs',
					},
					{
						name: 'Logo',
						url: 'logo',
					},
				],
			}
		},
	}
</script>
