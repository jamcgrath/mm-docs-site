<template>
	<div class="page-grid p-4" :class="`page-${slug}`">
		<div class="table">
			<docs-table :filename="slug" class="w-100"></docs-table>
		</div>
		<div class="markdown">
			<div v-html="markdown"></div>
		</div>
		<div v-if="code" class="code overflow-auto">
			<pre>
        <code v-highlight="code" class="html"></code>
      </pre>
			<button @click="$copyToClipboard(code)">copy</button>
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
				const code = codeFile ? codeFile.code : null
				return { slug, markdown, code }
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