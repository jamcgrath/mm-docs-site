<template>
	<div>
		<mm-tabs>
			<mm-tab-panel id="home-panel-1" tab-name="Media Queries" selected="true">
				<table class="table-auto border-collapse">
					<thead>
						<tr class="text-left">
							<th class="px-4 py-2">prefix</th>
							<th>query</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="(mq, index) in mqData"
							:key="index"
							class="v-align-baseline my-3"
						>
							<td class="pb-3">{{ mq.prefix }}</td>
							<td class="pb-3">{{ mq.mediaQuery }}</td>
						</tr>
					</tbody>
				</table>
			</mm-tab-panel>
			<mm-tab-panel id="home-panel-2" tab-name="All CSS">
				<ul class="list-reset grid grid-fluid">
					<li
						v-for="(item, index) in filesNamesArray"
						:key="index"
						class="mt-3 pl-2"
					>
						<nuxt-link :to="`/${item}`" class="td-underline_hover">{{
							item
						}}</nuxt-link>
					</li>
				</ul>
			</mm-tab-panel>
			<mm-tab-panel id="home-panel-3" tab-name="DS">
				<ul class="list-reset grid grid-fluid">
					<li
						v-for="(item, index) in filesNamesArray"
						:key="index"
						class="mt-3 pl-2"
					>
						<nuxt-link :to="`/${item}`" class="td-underline_hover">{{
							item
						}}</nuxt-link>
					</li>
				</ul>
			</mm-tab-panel>
		</mm-tabs>
	</div>
</template>

<script>
	import filenames from '~/mm-css/dist/json/filenames.json'
	import MmTabs from '~/components/mm-components/tab-panel/MmTabs.vue'
	import MmTabPanel from '~/components/mm-components/tab-panel/MmTabPanel.vue'

	export default {
		components: {
			MmTabs,
			MmTabPanel,
		},
		data() {
			return {
				excludeList: ['media-queries'],
				mqData: [
					{
						prefix: 'sm-',
						mediaQuery: '(min-width: 480px)',
					},
					{
						prefix: 'md-',
						mediaQuery: '(min-width: 768px)',
					},
					{
						prefix: 'lg-',
						mediaQuery: '(min-width: 1024px)',
					},
					{
						prefix: 'xl-',
						mediaQuery: '(min-width: 1440px)',
					},
					{
						prefix: 'xxl-',
						mediaQuery: '(min-width: 1920px)',
					},
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

<style>
</style>