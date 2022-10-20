<template>
	<div class="page-colors p-4">
		<mm-tabs>
			<mm-tab-panel id="colors-panel-1" tab-name="Colors" selected="true">
				<mm-input-search
					class="mb-4"
					v-model="searchText"
					@searchCleared="restoreColors"
				></mm-input-search>
				<template v-for="(colorGroup, index) in colors">
					<hr v-if="Object.keys(colors)[0] !== index" :key="`hr-${index}`" />
					<h2 v-if="index" :key="`cgt-${index}`" class="mb-2">
						{{ `${index.toUpperCase()}` }}
					</h2>
					<div class="page-content gap-5 mb-5" :key="`cg-${index}`">
						<div
							class="color-card flex flex-col"
							v-for="(color, index) in colorGroup"
							:key="index"
							:data-color="color"
						>
							<div
								class="w-100 p-1 border-0 text-center box-shadow-med body bold"
								:class="[getColor(colorVars[color])]"
								:style="{ background: `var(${color})` }"
							>
								{{ `${color.slice(2).replace('-', ' ')}` }}
							</div>
							<ul class="p-3 m-0" @click="$copyToClipboard($event)">
								<li
									v-if="!colorVars[color].includes('gradient')"
									class="mt-2 cursor-pointer flex a-items-center ws-nowrap"
								>
									<button
										class="
											bg-transparent
											border-0
											cursor-pointer
											flex
											a-items-center
											ws-nowrap
										"
										:data-copy="`${color.slice(2)}`"
									>
										{{ `${color.slice(2)}` }}
										<span class="copy-msg">copied</span>
									</button>
								</li>
								<li class="mt-2">
									<button
										class="
											bg-transparent
											border-0
											cursor-pointer
											flex
											a-items-center
											ws-nowrap
										"
										:data-copy="`${color.slice(2)}-bg`"
									>
										{{ `${color.slice(2)}-bg` }}
										<span class="copy-msg">copied</span>
									</button>
								</li>
								<li class="mt-2 cursor-pointer flex a-items-center ws-nowrap">
									<button
										class="
											bg-transparent
											border-0
											cursor-pointer
											flex
											a-items-center
											ws-nowrap
										"
										:data-copy="color"
									>
										{{ color }}
										<span class="copy-msg ml-2">copied</span>
									</button>
								</li>
								<li class="mt-2 cursor-pointer flex a-items-center ws-nowrap">
									<button
										class="
											bg-transparent
											border-0
											cursor-pointer
											flex
											a-items-center
											ws-nowrap
											gray-7
										"
										:data-copy="colorVars[color]"
									>
										{{ colorVars[color] }}
										<span class="copy-msg ml-2">copied</span>
									</button>
								</li>
							</ul>
						</div>
					</div>
				</template>
			</mm-tab-panel>
			<mm-tab-panel id="colors-panel-2" tab-name="Docs">
				<div class="markdown">
					<div v-html="markdown"></div>
				</div>
			</mm-tab-panel>
		</mm-tabs>
	</div>
</template>

<script>
	import MmTabs from '~/components/mm-components/tab-panel/MmTabs.vue'
	import MmTabPanel from '~/components/mm-components/tab-panel/MmTabPanel.vue'
	import colorsProps from '~/mm-css/dist/json/colors-props.json'
	import MmInputSearch from '~/components/mm-components/MmInputSearch.vue'

	export default {
		components: {
			MmTabs,
			MmTabPanel,
			MmInputSearch,
		},
		async asyncData({ $getMarkdown, params }) {
			const slug = 'colors'
			const markdown = await $getMarkdown(slug)
			return {
				slug,
				markdown,
			}
		},
		data() {
			return {
				searchText: '',
				colors: null,
			}
		},
		computed: {
			colorVarNames() {
				return Object.keys(colorsProps[':root'])
			},
			colorVars() {
				return colorsProps[':root']
			},
			colorMap() {
				const sortedColors = new Map()
				this.colorVarNames.forEach((item) => {
					const color = item.slice(2).split('-')[0]
					if (sortedColors.has(color)) {
						const val = sortedColors.get(color)
						val.push(item)
						sortedColors.set(color, val)
					} else {
						sortedColors.set(color, [item])
					}
				})
				return Object.fromEntries(sortedColors)
			},
		},
		watch: {
			searchText(newValue, oldValue) {
				console.log(this.colorMap)
				const keys = Object.keys(this.colorMap)
				const search = keys.filter((key) => key.includes(newValue))
				let results = {}
				search.forEach((s) => {
					results[s] = this.colorMap[s]
				})
				if (search.length) {
					this.colors = results
				} else {
					this.colors = this.colorMap
				}
			},
		},
		methods: {
			restoreColors() {
				this.colors = this.colorVarNames
			},

			getColor(color) {
				const l = parseInt(color.split(',')[2])
				return l <= 50 ? 'white' : 'black'
			},
		},
		mounted() {
			this.colors = this.colorMap
		},
	}
</script>

<style>
	.page-content {
		display: grid;
		grid-template-columns: repeat(auto-fill, 200px);
		grid-template-rows: repeat(3, auto);
	}

	.color-card {
		border: 1px solid var(--gray-4);
		border-radius: 15px;
		overflow: hidden;
	}

	.color-card ul {
		min-height: 100px;
	}
	.color-value:focus {
		outline-offset: -5px;
	}
	.copied > .copy-msg {
		display: inline-block;
	}
</style>