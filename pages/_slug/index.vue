<template>
	<div class="page-grid p-4" :class="`page-${slug}`">
		<div class="table">
			<docs-table :filename="slug" class="w-100"></docs-table>
		</div>
		<!-- <div class="markdown">
			<div v-html="markdown"></div>
		</div> -->
		<div v-if="codeExample || markdown" class="examples">
			<mm-tabs>
				<mm-tab-panel
					v-if="codeExample"
					id="visualPreview"
					tab-name="Component"
					selected="true"
				>
					<div class="visual-preview grid grid-fluid">
						<div
							v-for="(example, index) in codeExample"
							:key="`vp-${index}`"
							@click="$copyToClipboard(example.code)"
							class="code-visual"
							v-html="example.code"
						></div>
					</div>
				</mm-tab-panel>
				<mm-tab-panel v-if="codeExample" id="codePreview" tab-name="Code">
					<docs-code :codeExample="codeExample"></docs-code>
				</mm-tab-panel>
				<mm-tab-panel v-if="markdown" id="markdown" tab-name="Documentation">
					<div class="markdown">
						<div v-html="markdown"></div>
					</div>
				</mm-tab-panel>
			</mm-tabs>
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
			return $getMarkdown(params.slug)
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
