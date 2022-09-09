<template>
	<ul class="list-reset grid grid-fluid">
		<li v-for="(item, index) in filesNamesArray" :key="index" class="mt-3 pl-2">
			<nuxt-link :to="`/${item}`" class="td-underline_hover">{{
				item
			}}</nuxt-link>
		</li>
	</ul>
</template>

<script>
	import filenames from '~/mm-css/dist/json/filenames.json'
	export default {
		data() {
			return {
				excludeList: ['media-queries'],
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
</style>