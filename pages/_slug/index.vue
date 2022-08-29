<template>
	<div :class="`page-${slug}`">
		<div class="sm-container p-4">
			<docs-table :filename="slug"></docs-table>
		</div>
	</div>
</template>

<script>
	import DocsTable from '~/components/DocsTable.vue'
	export default {
		async asyncData({ params }) {
			const slug = params.slug // When calling /abc the slug will be "abc"
			return { slug }
		},
		components: {
			DocsTable,
		},
	}
</script>

<style

</style>