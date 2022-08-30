<template>
	<div class="default-wrap grid pt-11">
		<docs-header class="default-header fixed t-0 w-100"></docs-header>
		<docs-sidebar
			class="default-sidebar overflow-y-auto hide-scroll fixed"
		></docs-sidebar>
		<main>
			<Nuxt />
		</main>
		<docs-off-canvas-sidebar class="default-offcanvas">
		</docs-off-canvas-sidebar>
		<docs-footer class="default-footer z-10 fixed b-0 w-100"></docs-footer>
	</div>
</template>
<script>
	import DocsSidebar from '~/components/DocsSidebar.vue'
	import DocsOffCanvasSidebar from '~/components/DocsOffCanvasSidebar.vue'
	import DocsHeader from '~/components/DocsHeader.vue'
	import DocsFooter from '~/components/DocsFooter.vue'
	import '../node_modules/vue-code-highlight/themes/window.css'

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
		grid-template-columns: 200px 1fr;
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
		height: calc(100% - 80px);
	}
	.default-footer {
		grid-area: footer;
	}
	main,
	.default-offcanvas {
		grid-area: content;
		border-right: 1px solid var(--gray-5);
	}
	main {
		border-left: 1px solid var(--gray-5);
		height: 100vh;
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

	.copy-msg {
		display: none;
		font-size: 0.8em;
		font-family: monospace;
		text-decoration-line: underline;
		text-underline-offset: 4px;
		text-transform: capitalize;
		margin-left: 10px;
	}
	.copied > .copy-msg {
		display: inline-block;
	}

	a {
		color: var(--pressed);
	}
</style>