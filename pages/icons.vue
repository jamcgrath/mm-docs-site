<template>
	<div class="page-mm-icons">
		<mm-tabs>
			<mm-tab-panel id="Icon-panel-1" tab-name="Icons" selected="true">
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
						<button
							class="body navy-20-bg p-2 w-100 text-center"
							@click="copyIconClass(icon)"
						>
							mmi-{{ icon }}
						</button>
						<button><span class="copy-msg">copied</span></button>
						<button
							class="body navy-20-bg p-2 w-100 text-center mt-3"
							@click="copyIconCode(icon)"
						>
							<i class="mmi mmi-codemarkup title-5" aria-hidden="true"></i>
							<span class="visually-hidden">Copy code</span>
						</button>
						<a href="../mm-icons/dist/icons/codemarkup.svg" download>test</a>
					</li>
				</ul>
			</mm-tab-panel>
			<mm-tab-panel id="icons-panel-2" tab-name="Code">
				<docs-code :codeExample="codeExample"></docs-code>
			</mm-tab-panel>
		</mm-tabs>
	</div>
</template>

<script>
	import mmIconsJson from '~/mm-icons/dist/json/mm-icons.json'
	import MmInputSearch from '~/components/mm-components/MmInputSearch.vue'
	import MmTabs from '~/components/mm-components/tab-panel/MmTabs.vue'
	import MmTabPanel from '~/components/mm-components/tab-panel/MmTabPanel.vue'
	import DocsCode from '~/components/DocsCode.vue'

	export default {
		async asyncData({ $getCode, route }) {
			console.log('route', route)
			const codeExample = await $getCode('icons')
			console.log('cc', codeExample)
			return { codeExample }
		},
		components: {
			MmInputSearch,
			MmTabs,
			MmTabPanel,
			DocsCode,
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
			copyIconClass(icon) {
				this.$copyToClipboard(`mm-${icon}`, event)
			},
			copyIconCode(icon) {
				const code = `<i class="mmi mmi-${icon}" aria-hidden="true"></i>`
				this.$copyToClipboard(code, event)
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