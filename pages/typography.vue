
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
					<button
						class="
							w-100
							py-4
							cursor-pointer
							border-0
							text-left
							flex flex-wrap
							a-items-center
							bg-transparent
							ws-nowrap
							relative
							capitalize
						"
						@click="$copyToClipboard(className)"
					>
						<span class="pointer-events-none" :class="className">{{
							className.split('_')[0]
						}}</span>
						<span class="copy-msg block m-0 absolute b-0 l-0">copied</span>
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