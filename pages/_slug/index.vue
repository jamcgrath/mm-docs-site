<template>
	<div class="page-grid p-4" :class="`page-${slug}`">
		<div class="table">
			<docs-table :filename="slug" class="w-100"></docs-table>
		</div>
		<div class="markdown">
			<div v-html="markdown"></div>
		</div>
		<div v-if="codeExample" class="visual-preview grid grid-fluid">
			<div
				v-for="(example, index) in codeExample"
				:key="`vp-${index}`"
				@click="$copyToClipboard(example.code)"
				class="code-visual"
				v-html="example.code"
			></div>
		</div>
		<div v-if="codeExample" class="code-preview overflow-auto relative">
			<pre
				class="m-0"
				v-for="(example, index) in codeExample"
				:key="index"
				@click="$copyToClipboard(example.code)"
			>
					<code v-highlight="example.code" :class="`language-${example.language}`"></code>
				</pre>
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
	.visual-preview,
	.code-preview {
		grid-area: docs;
	}
	.markdown {
		align-self: start;
	}
	.visual-preview {
		align-self: center;
	}
	.code-preview {
		align-self: end;
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
