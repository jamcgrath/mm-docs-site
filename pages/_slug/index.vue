<template>
	<div class="page-grid p-4" :class="`page-${slug}`">
		<div class="table">
			<docs-table :filename="slug" class="w-100"></docs-table>
		</div>
		<div class="markdown">
			<div v-html="markdown"></div>
		</div>
		<div v-if="codeExample" class="code overflow-auto relative">
			<div
				class="code-preview"
				v-for="(example, index) in codeExample"
				:key="index"
			>
				<pre class="m-0">
					<code v-highlight="example.code" :class="`language-${example.language}`"></code>
				</pre>
			</div>
			<!-- prettier-ignore -->
			<button @click="$copyToClipboard(codeExample.code)" aria-label="copy code" class="absolute t-0 r-0 gray-2 bg-transparent border-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg></button>
			<div v-html="codeExample.code"></div>
		</div>
	</div>
</template>

<script>
	import DocsTable from '~/components/DocsTable.vue'

	export default {
		components: {},
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
	.code {
		grid-area: docs;
	}
	.code {
		align-self: end;
	}
	.code code {
		padding: 2em;
		border-radius: 12px;
	}
</style>
