<template>
	<aside class="main-sidebar p-4 _min-w overflow-y-auto hide-scroll">
		<nav role="navigation">
			<ul class="list-reset">
				<li>
					<nuxt-link to="/colors">Colors</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/typography">Typography</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/flex">Flex</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/align-content">Align Content</nuxt-link>
				</li>
				<li v-for="(item, index) in filesNamesArray" :key="index">
					<nuxt-link :to="`/${item}`">{{ item }}</nuxt-link>
				</li>
			</ul>
		</nav>
	</aside>
</template>

<script>
	import filenames from '~/mm-css/dist/json/filenames.json'

	export default {
		data() {
			return {
				excludeList: ['typography', 'colors', 'media-queries'],
			}
		},
		computed: {
			filesNamesArray() {
				const fileList = []

				Object.values(filenames).forEach((file) => {
					let isExcluded = false
					this.excludeList.forEach((excluded) => {
						if (file.includes(excluded)) {
							isExcluded = true
						}
					})
					if (isExcluded) {
						return
					} else {
						fileList.push(file.split('.')[0])
					}
				})
				return fileList
			},
		},
	}
</script>

<style>
	.main-sidebar {
		--min-width: 180px;
		border-right: 1px solid var(--gray-5);
	}
</style>