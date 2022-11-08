<template>
	<div class="tooltip-container-gray relative">
		<!-- <div class="absolute">
			<mm-tooltip
				tooltipId="tooltipId1"
				theme="light"
				align="top"
				tooltipText="Showing what happens when the tooltip has lots of text"
			>
				<button class="btn btn-primary btn-lg information-button">
					I should show a tooltip
				</button>
			</mm-tooltip>
		</div>
		<hr />
		<div class="absolute">
			<mm-tooltip
				tooltipId="tooltipId2"
				theme="light"
				align="left"
				tooltipText="Showing what happens when the tooltip has lots of text"
			>
				<button class="btn btn-primary btn-lg information-button">
					I should show a tooltip
				</button>
			</mm-tooltip>
		</div>
		<hr />
		<div class="absolute">
			<mm-tooltip
				tooltipId="tooltipId3"
				theme="light"
				align="right"
				tooltipText="Showing what happens when the tooltip has lots of text"
			>
				<button class="btn btn-primary btn-lg information-button">
					I should show a tooltip
				</button>
			</mm-tooltip>
		</div>
		<hr /> -->
		<div>
			<mm-tooltip
				tooltipId="tooltipId4"
				theme="light"
				align="bottom"
				tooltipText="Showing what"
			>
				<button class="btn btn-primary btn-lg information-button">
					I should show a tooltip
				</button>
			</mm-tooltip>
		</div>
		<div class="mt-20">
			<mm-tooltip
				tooltipId="tooltipId5"
				theme="light"
				align="top"
				tooltipText="Showing what"
			>
				<button class="btn btn-primary btn-lg information-button">
					I should show a tooltip
				</button>
			</mm-tooltip>
		</div>
		<div class="mt-20 absolute" style="right: 20px">
			<mm-tooltip
				tooltipId="tooltipId6"
				theme="light"
				align="right"
				tooltipText="Showing what a longer tooltip would show in this view"
			>
				<button class="btn btn-primary btn-lg information-button">test</button>
			</mm-tooltip>
		</div>
		<div class="mt-20 mt-20 absolute" style="left: 20px">
			<mm-tooltip
				tooltipId="tooltipId7"
				theme="light"
				align="left"
				tooltipText="Showing what a longer tooltip would show in this view"
			>
				<button class="btn btn-primary btn-lg information-button">I</button>
			</mm-tooltip>
		</div>
	</div>
</template>

<script>
	import MmTooltip from '~/components/mm-components/tooltip/MmTooltip.vue'
	export default {
		layout: 'layout-components',
		components: { MmTooltip },
		data() {
			return {
				tooltipId: 'btn-desc-tip',
				showTip: false,
			}
		},
	}
</script>

<style>
	.main-sidebar,
	.default-footer,
	.default-header {
		/* display: none !important; */
	}
	.default-wrap {
		/* display: block !important; */
		padding: 0;
	}
	.tooltip-container-gray {
		background-color: var(--gray-2);
		height: 100vh;
		padding: 100px 400px;
	}
	.information-button {
		/* margin: 10px; */
		box-sizing: border-box;
	}
</style>