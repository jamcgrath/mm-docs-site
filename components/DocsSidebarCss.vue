<template>
	<aside class="main-sidebar p-4">
		<nav role="navigation">
			<ul class="list-reset">
				<li>
					<nuxt-link to="/colors" class="copy_semibold">Colors</nuxt-link>
				</li>
				<li class="mt-3">
					<nuxt-link to="/typography" class="copy_semibold"
						>Typography</nuxt-link
					>
				</li>
				<li class="mt-3">
					<nuxt-link to="/icons" class="copy_semibold">Icons</nuxt-link>
				</li>
				<li class="mt-6">
					<span class="copy_semibold">UI</span>
					<ul class="list-reset">
						<li class="mt-3 pl-2">
							<nuxt-link to="/badges">Badges</nuxt-link>
						</li>
						<li class="mt-3 pl-2">
							<nuxt-link to="/buttons">Buttons</nuxt-link>
						</li>
					</ul>
				</li>
				<li class="mt-6">
					<span class="copy_semibold">Utility Classes</span>
					<ul class="list-reset">
						<li
							v-for="(item, index) in filesNamesArray"
							:key="index"
							class="mt-3 pl-2"
						>
							<nuxt-link :to="`/${item}`">{{ item }}</nuxt-link>
						</li>
					</ul>
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
				excludeList: [
					'typography',
					'colors',
					'media-queries',
					'badges',
					'buttons',
				],
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
