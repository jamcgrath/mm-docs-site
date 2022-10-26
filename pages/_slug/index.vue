<template>
	<div class="page-grid p-4" :class="`page-${slug}`">
		<div class="table">
			<docs-table :cssStyles="cssStyles" class="w-100"></docs-table>
		</div>
	</div>
</template>

<script>
	import DocsTable from '~/components/DocsTable.vue'
	import MmTabs from '~/components/mm-components/tab-panel/MmTabs.vue'
	import MmTabPanel from '~/components/mm-components/tab-panel/MmTabPanel.vue'
	import DocsCode from '~/components/DocsCode.vue'

	export default {
		components: { DocsTable, MmTabs, MmTabPanel, DocsCode },
		async asyncData({ $getMarkdown, params }) {
			const { slug } = params
			const markdown = await $getMarkdown(slug)
			return {
				slug,
				markdown,
			}
		},
		computed: {
			cssStyles() {
				return this.$mapStyles(require(`~/mm-css/dist/json/${this.slug}`))
			},
		},
		components: {
			DocsTable,
		},
	}
</script>

<style>
	.page-grid {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-areas: 'table docs';
		gap: 2%;
	}
	.table {
		grid-area: table;
	}
	.markdown,
	.examples {
		grid-area: docs;
	}

	.code-preview pre {
		white-space: pre-line;
	}
	.code-preview code {
		padding: 1em;
		border-radius: 12px;
		white-space: pre-wrap;
	}
</style>
