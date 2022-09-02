
<template>
	<div class="page-typography p-4">
		<div class="page-content_typography grid gap-5">
			<div class="grid-col" v-for="tType in textType" :key="tType">
				<h2 class="grid-col-title">{{ tType }}</h2>
				<div
					v-for="className in typographyClasses[tType]"
					:key="className"
					class="card-typography mt-4 p-2 relative"
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
						:class="className"
						:ref="className"
						@click="$copyToClipboard(className)"
					>
						<span class="pointer-events-none">{{
							className.split('_')[0]
						}}</span>
						<span class="copy-msg block m-0 absolute t-0 r-0 mr-2">copied</span>
					</button>
					<div class="font-info flex j-content-around mt-0_5 label_italic">
						<template
							v-for="(size, key, index) in getFontSize(className.split('_')[0])"
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
	</div>
</template>

<script>
	import typographyStyles from '~/mm-css/dist/json/typography-styles.json'
	import typographyProps from '~/mm-css/dist/json/typography-props.json'

	export default {
		data() {
			return {
				textType: [
					'reg',
					'article',
					'med',
					'semibold',
					'italic',
					'link',
					'display',
				],
			}
		},
		computed: {
			cssStyles() {
				return this.$mapStyles(typographyStyles)
			},
			typographyClasses() {
				const classNameObj = {}
				this.cssStyles.forEach((value, key) => {
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
				const displayFonts = {
					'title-7': 'copy',
					'title-8': 'body',
					'title-9': 'label',
					'title-10': 'caption',
				}
				let fontSize
				if (displayFonts[className]) {
					fontSize = props[`--${displayFonts[className]}`]
				} else {
					fontSize = props[`--${className}`]
				}

				return {
					px: `${parseFloat(fontSize) * 16}px`,
					rem: fontSize,
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
		border-bottom: 3px solid var(--bw-primary);
	}
	.card-typography {
		border: 1px solid var(--gray-4);
		border-radius: 15px;
	}
</style>