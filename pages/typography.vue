
<template>
	<div class="page-typography p-4">
		<div class="page-content_typography grid gap-5">
			<div class="grid-col" v-for="tType in textType" :key="tType">
				<h2 class="grid-col-title">{{ tType }}</h2>
				<div
					v-for="className in typographyClasses[tType]"
					:key="className"
					class="card-typography mt-4"
				>
					<button>
						<span :class="className">{{ className.split('_')[0] }}</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import typographyStyles from '~/mm-css/dist/json/typography-styles.json'

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
		methods: {
			trimClass(s) {
				const sTrimed = s.trim()
				const end =
					sTrimed[sTrimed.length - 1] === ',' ? sTrimed.length - 1 : s.length
				return sTrimed.slice(1, end)
			},
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
	}
</script>

<style scoped>
	.page-content_typography {
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}
	.grid-col-title {
		border-bottom: 3px solid var(--bw-primary);
	}
</style>