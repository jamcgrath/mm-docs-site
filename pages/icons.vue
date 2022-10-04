<template>
	<div class="page-mm-icons">
		<mm-input-search
			class="mb-4"
			v-model="searchText"
			@searchCleared="restoreIcons"
		></mm-input-search>
		<ul class="list-reset grid grid-fluid gap-4">
			<li
				v-for="icon in icons"
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
	import MmInputSearch from '~/components/mm-components/MmInputSearch.vue'

	export default {
		components: {
			MmInputSearch,
		},
		data() {
			return {
				searchText: '',
				icons: null,
			}
		},
		computed: {
			iconList() {
				return mmIconsJson
			},
			iconNames() {
				return Object.keys(mmIconsJson)
			},
		},
		watch: {
			searchText(newValue, oldValue) {
				this.icons = this.iconNames.filter((icon) => icon.includes(newValue))
			},
		},
		methods: {
			restoreIcons() {
				this.icons = this.iconNames
			},
		},
		beforeMount() {
			this.icons = Object.keys(mmIconsJson)
		},
	}
</script>

<style>
	.icon-item {
		border: 1px solid;
	}
</style>