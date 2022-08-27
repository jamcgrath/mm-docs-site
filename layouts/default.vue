<template>
	<div class="default-wrap grid">
		<docs-header class="default-header"></docs-header>
		<docs-sidebar class="default-sidebar"></docs-sidebar>
		<main>
			<Nuxt />
		</main>
		<docs-off-canvas-sidebar class="default-offcanvas">
		</docs-off-canvas-sidebar>
		<docs-footer class="default-footer"></docs-footer>
	</div>
</template>
<script>
	import DocsSidebar from '~/components/DocsSidebar.vue'
	import DocsOffCanvasSidebar from '~/components/DocsOffCanvasSidebar.vue'
	import DocsHeader from '~/components/DocsHeader.vue'
	import DocsFooter from '~/components/DocsFooter.vue'
	export default {
		components: {
			DocsSidebar,
			DocsHeader,
			DocsFooter,
			DocsOffCanvasSidebar,
		},
	}
</script>
<style>
	.default-wrap {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:
			'header header'
			'sidebar content'
			'footer footer';
		grid-gap: 0;
		height: 100vh;
	}
	.default-header {
		grid-area: header;
	}
	.default-sidebar {
		grid-area: sidebar;
	}
	.default-footer {
		grid-area: footer;
	}
	main,
	.default-offcanvas {
		grid-area: content;
	}
	.default-offcanvas {
		justify-self: end;
		position: absolute;
		transform: translateX(100%);
		transition: transform 200ms ease;
		will-change: transform;
	}
	.default-wrap:has(> .open-ocs) .default-offcanvas {
		transform: translateX(0);
	}
</style>