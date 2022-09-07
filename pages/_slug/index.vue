<template>
	<div class="page-grid p-4" :class="`page-${slug}`">
		<div class="table">
			<docs-table :filename="slug" class="w-100"></docs-table>
		</div>
		<!-- <div class="markdown">
			<div v-html="markdown"></div>
		</div> -->
		<div v-if="codeExample" class="examples">
			<mm-tabs>
				<mm-tab-panel id="visualPreview" tab-name="Component" selected="true">
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
				<mm-tab-panel id="codePreview" tab-name="Code">
					<div class="code-preview overflow-auto relative">
						<pre
							class="m-0"
							v-for="(example, index) in codeExample"
							:key="index"
							@click="$copyToClipboard(example.code)"
						>
								<code v-highlight="example.code" :class="`language-${example.language}`"></code>
							</pre>
					</div>
				</mm-tab-panel>
				<mm-tab-panel id="markdown" tab-name="Documentation">
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

	export default {
		components: { DocsTable, MmTabs, MmTabPanel },
		async asyncData({ params }) {
			const slug = params.slug
			let markdownFile
			let codeFile
			try {
				markdownFile = await require(`~/markdown/${slug}.md`)
				codeFile = await require(`~/code-examples/${slug}.js`)
				console.log(codeFile)
			} finally {
				const markdown = markdownFile ? markdownFile.default : null
				const codeExample = codeFile ? codeFile : null
				return { slug, markdown, codeExample }
			}
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
	/* .markdown {
				align-self: start;
			}
			.examples {
				align-self: center;
			} */
	.code-preview pre {
		white-space: pre-line;
	}
	.code-preview code {
		padding: 1em;
		border-radius: 12px;
		white-space: pre-wrap;
	}
</style>
