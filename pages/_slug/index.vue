<template>
	<div :class="`page-${slug}`">
		<div class="md-container p-4">
			<docs-table :filename="slug"></docs-table>
		</div>
	</div>
</template>

<script>
	import DocsTable from '~/components/DocsTable.vue'
	export default {
		async asyncData({ params }) {
			const slug = params.slug
			return { slug }
		},
		components: {
			DocsTable,
		},
	}
</script>

<style

</style>