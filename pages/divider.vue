<!-- <template>
	<mm-tabs>
		<mm-tab-panel id="divider-tab-3" tab-name="Usage">
			<div class="markdown" v-html="markdown"></div>
		</mm-tab-panel>
		<mm-tab-panel id="divider-tab-2" tab-name="CSS">
			<docs-table :cssStyles="divStyles"></docs-table>
		</mm-tab-panel>
	</mm-tabs>
</template>

<script>
	import DocsTable from '~/components/DocsTable.vue'
	import MmTabs from '~/components/mm-components/tab-panel/MmTabs.vue'
	import MmTabPanel from '~/components/mm-components/tab-panel/MmTabPanel.vue'
	import dividerStyles from '~/mm-css/dist/json/divider.json'

	export default {
		components: {
			DocsTable,
			MmTabs,
			MmTabPanel,
		},
		async asyncData({ $getMarkdown }) {
			const slug = 'divider'
			const markdown = await $getMarkdown(slug)
			return {
				slug,
				markdown,
			}
		},
		computed: {
			divStyles() {
				return this.$mapStyles(dividerStyles)
			},
		},
	}
</script> -->
