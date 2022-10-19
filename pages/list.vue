<template>
	<div class="">
		<h2>list check sm</h2>
		<ul class="list-check-sm" role="list">
			<li>list1 sm</li>
			<li>list2 sm</li>
			<li>list3 sm</li>
			<li>list4 sm</li>
		</ul>
		<hr />
		<h2>list check med</h2>
		<ul class="list-check-med" role="list">
			<li>list1 med</li>
			<li>list2 med</li>
			<li>list3 med</li>
			<li>list4 med</li>
		</ul>
		<hr />
		<h2>list check lg</h2>
		<ul class="list-check-lg" role="list">
			<li>list1 lg</li>
			<li>list2 lg</li>
			<li>list3 lg</li>
			<li>list4 lg</li>
		</ul>
		<hr />
		<h2>list check nested</h2>
		<ul class="list-check-lg" role="list">
			<li>list1 lg</li>
			<li>
				list2 lg
				<ul class="list-check-med" role="list">
					<li>list1 med</li>
					<li>
						list2 med
						<ul class="list-check-sm" role="list">
							<li>list1 sm</li>
							<li>list2 sm</li>
							<li>list3 sm</li>
							<li>list4 sm</li>
						</ul>
					</li>
					<li>list3 med</li>
					<li>list4 med</li>
				</ul>
			</li>
			<li>list3 lg</li>
			<li>list4 lg</li>
		</ul>
		<hr />
		<h2>list check missing role="list"</h2>
		<ul class="list-check-med">
			<li>list1 med</li>
			<li>list2 med</li>
			<li>list3 med</li>
			<li>list4 med</li>
		</ul>
	</div>
</template>

<script>
	export default {}
</script>

<style>
	/* .list-check-sm,
		.list-check-med,
		.list-check-lg {
			--_list-fs: var(--list-fs, inherit);
			list-style: none;
			margin: 0;
			padding: 0;
			font-size: var(--_list-fs);
			font-weight: 400;
			line-height: var(--lh-125);
			color: var(--gray-6);
			width: max-content;
		}
		.list-check-sm {
			--list-fs: var(--caption);
		}
		.list-check-med {
			--list-fs: var(--body);
		}
		.list-check-lg {
			--list-fs: var(--title-6);
		}

		ul[class*='list-check'] li {
			--list-gap: calc(var(--list-fs) + var(--space-2));
			display: grid;
			grid-template-columns: 0 1fr;
			align-items: center;
			gap: 0 var(--list-gap);
		}

		ul[class*='list-check'] li:before {
			font-size: inherit;
			content: '\f22d';
			color: var(--grape);
			font-family: mm-icons !important;
			font-style: normal;
			font-weight: normal !important;
			font-variant: normal;
			text-transform: none;
			line-height: 1;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}

		ul[class*='list-check'] > li > ul[class*='list-check'] {
			padding: 0 var(--list-gap);
		}

		ul[class*='list-check']:not([role='list']) {
			outline: 1px solid var(--error);
		}
		ul[class*='list-check']:not([role='list']):after {
			content: 'ul needs role=list';
			color: var(--error);
			display: block;
		} */
</style>