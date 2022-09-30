<template>
	<div class="page-mm-icons">
		<ul class="list-reset grid grid-fluid gap-4">
			<li
				v-for="icon in Object.keys(iconList)"
				:key="`mmi-${iconList[icon]}`"
				class="title-3 icon-item p-3 flex flex-col a-items-center br-8"
			>
				<i :class="`mmi mmi-${icon}`" aria-hidden="true"></i>
				<button class="body navy-20-bg p-2 w-100 text-center">
					{{ icon }}
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
	import mmIconsJson from '~/mm-icons/dist/json/mm-icons.json'
	export default {
		computed: {
			iconList() {
				return mmIconsJson
			},
		},
	}
</script>

<style>
	.icon-item {
		border: 1px solid;
	}
</style>