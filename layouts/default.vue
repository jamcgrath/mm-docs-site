<template>
	<div class="default-wrap pt-11">
		<docs-header class="default-header fixed t-0 w-100 z-10"></docs-header>
		<docs-sidebar
			class="default-sidebar overflow-y-auto hide-scroll fixed"
		></docs-sidebar>
		<main class="p-3">
			<Nuxt />
		</main>
		<docs-footer class="default-footer z-10 fixed b-0 w-100"></docs-footer>
	</div>
</template>

<script>
	import DocsSidebar from '~/components/DocsSidebarCss.vue'
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
		padding-bottom: ;
	}
	main {
		border-left: 1px solid var(--gray-5);
		padding-bottom: 40px;
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
		font-size: var(--caption);
		font-family: 'IBM Plex Mono', monospace;
		font-weight: normal;
		font-style: normal;
		text-decoration-line: underline;
		text-underline-offset: 4px;
		text-transform: lowercase;
		letter-spacing: normal;
	}
	.copied > .copy-msg {
		display: inline-block;
	}

	a {
		color: var(--pressed);
	}
	.markdown {
		padding: var(--space-4);
	}
	/* .markdown code {
			background: var(--gray-3);
			padding: 0 var(--space-0-5);
			color: var(--error);
		} */
	.markdown table {
		border-collapse: collapse;
	}
	.markdown td {
		padding: var(--space-1) var(--space-2);
		border: 1px solid var(--aqua-light);
	}
</style>