
<template>
	<div class="page-typography p-4">
		<mm-tabs>
			<mm-tab-panel id="typo-1" tab-name="Example" :selected="true">
				<div class="page-content_typography grid gap-5">
					<template v-for="(classNameArray, index) in typographyClasses">
						<div class="grid-col" :key="index">
							<h2 class="grid-col-title">{{ index }}</h2>
							<div class="grid-col-grid mt-3">
								<div
									v-for="(className, i) in classNameArray"
									:key="className"
									class="card-typography p-2 relative"
									:class="`col-item-${i + 1}`"
								>
									<button
										class="
											w-100
											cursor-pointer
											border-0
											text-left
											flex flex-wrap
											a-items-center
											bg-transparent
											ws-nowrap
											capitalize
											px-0
										"
										:ref="className"
										@click="$copyToClipboard(className)"
									>
										<span class="pointer-events-none" :class="className">{{
											className.split('_')[0]
										}}</span>
										<span class="copy-msg block m-0 absolute t-0 r-0 mr-2"
											>copied</span
										>
									</button>
									<div
										class="font-info flex j-content-around mt-0_5 label_italic"
									>
										<template
											v-for="(size, key, index) in getFontSize(
												className.split('_')[0]
											)"
										>
											<span :key="`${index}-${key}`" class="font-size">
												{{ size }}
											</span>
											|
										</template>

										<span class="font-family">
											{{ getFontFamily(className) }}
										</span>
									</div>
								</div>
							</div>
						</div>
					</template>
				</div>
			</mm-tab-panel>
			<mm-tab-panel id="typo-2" tab-name="CSS">
				<div class="table">
					<docs-table filename="typography-styles" class="w-100"></docs-table>
				</div>
			</mm-tab-panel>
			<mm-tab-panel id="typo-3" tab-name="Docs">
				<div class="markdown">
					<div v-html="markdown"></div>
				</div>
			</mm-tab-panel>
		</mm-tabs>
	</div>
</template>

<script>
	import typographyStyles from '~/mm-css/dist/json/typography-styles.json'
	import typographyProps from '~/mm-css/dist/json/typography-props.json'
	import MmTabs from '~/components/mm-components/tab-panel/MmTabs.vue'
	import MmTabPanel from '~/components/mm-components/tab-panel/MmTabPanel.vue'
	import DocsTable from '~/components/DocsTable.vue'

	export default {
		components: {
			MmTabs,
			MmTabPanel,
			DocsTable,
		},
		async asyncData({ $getMarkdown }) {
			const slug = 'typography'
			const markdown = await $getMarkdown(slug)
			return {
				slug,
				markdown,
			}
		},
		computed: {
			cssStyles() {
				return this.$mapStyles(typographyStyles)
			},
			typographyClasses() {
				const classNameObj = {}
				this.cssStyles.forEach((value, key) => {
					//skip :before and :after
					if (key.includes(':')) {
						return
					}

					const textType = key.split('_')[1] || 'reg'
					if (!classNameObj[textType]) {
						classNameObj[textType] = []
					}

					classNameObj[textType].push(key)
				})
				return classNameObj
			},
		},
		methods: {
			getFontSize(className) {
				const props = typographyProps[':root']
				let fontSize = props[`--${className}`].replace(/[^\d\.]*/g, '')
				return {
					px: `${parseFloat(fontSize) * 16}px`,
					rem: `${fontSize}rem`,
				}
			},
			getFontFamily(className) {
				if (className.split('_')[1] === 'display') {
					return 'Poppins'
				}
				const fontFamily = this.cssStyles.get(className).fontFamily
				if (fontFamily) {
					const fontFamilyVar = fontFamily.match(/(?<=\().*(?=\))/)[0]
					const fontFamilyProp = typographyProps[':root'][fontFamilyVar]
					return fontFamilyProp.split(',')[0]
				}
			},
		},
	}
</script>

<style scoped>
	.page-content_typography {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}
	.grid-col-title {
		border-bottom: 3px solid var(--grape);
	}
	.grid-col-grid {
		display: grid;
		gap: var(--space-3);
	}
	.card-typography {
		border: 1px solid var(--gray-4);
		border-radius: 15px;
	}
</style>