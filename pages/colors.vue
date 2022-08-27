<template>
	<div class="page-colors p-4">
		<div class="page-content grid-fluid gap-5">
			<div
				class="color-card flex flex-col"
				v-for="(color, index) in colorVarNames"
				:key="index"
			>
				<button
					class="
						color-value
						w-100
						p-4
						cursor-pointer
						flex-1
						border-0
						text-left
						flex
						a-items-center
					"
					:class="[
						getColor(colorVars[color]),
						getColor(colorVars[color]).length > 23 ? 'ws-nowrap' : '',
					]"
					:style="{ background: `var(${color})` }"
					@click="copyToClipboard($event)"
					:data-item="colorVars[color]"
				>
					<span class="pointer-events-none">{{ colorVars[color] }}</span>
					<span class="copy-msg">copied</span>
				</button>
				<ul class="p-3 m-0" @click="copyToClipboard($event)">
					<li>
						<button
							class="
								bg-transparent
								border-0
								cursor-pointer
								flex
								a-items-center
								ws-nowrap
							"
							:data-item="color"
						>
							{{ color }}
							<span class="copy-msg">copied</span>
						</button>
					</li>
					<li
						v-if="!colorVars[color].includes('gradient')"
						class="mt-1_5 cursor-pointer flex a-items-center ws-nowrap"
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
							:data-item="colorNames[index]"
						>
							{{ colorNames[index] }}
							<span class="copy-msg">copied</span>
						</button>
					</li>
					<li class="mt-1_5">
						<button
							class="
								bg-transparent
								border-0
								cursor-pointer
								flex
								a-items-center
								ws-nowrap
							"
							:data-item="`bg-${colorNames[index]}`"
						>
							{{ `bg-${colorNames[index]}` }}
							<span class="copy-msg">copied</span>
						</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import colorsProps from '~/mm-css/dist/json/colors-props.json'
	import colorsAlerts from '~/mm-css/dist/json/colors-alerts.json'
	import colorsAlertsBg from '~/mm-css/dist/json/colors-alerts-bg.json'
	import colorsGray from '~/mm-css/dist/json/colors-gray.json'
	import colorsNeutral from '~/mm-css/dist/json/colors-neutral.json'
	import colorsState from '~/mm-css/dist/json/colors-state.json'
	import colorGradients from '~/mm-css/dist/json/colors-gradients.json'
	import colorBrand from '~/mm-css/dist/json/colors-brand.json'
	import colorBrandBg from '~/mm-css/dist/json/colors-brand-bg.json'
	import colorGrayBg from '~/mm-css/dist/json/colors-gray-bg.json'
	import colorNeutralBg from '~/mm-css/dist/json/colors-neutral-bg.json'
	import colorStateBg from '~/mm-css/dist/json/colors-state-bg.json'
	export default {
		computed: {
			colorVarNames() {
				return Object.keys(colorsProps[':root'])
			},
			colorNames() {
				return this.colorVarNames.map((color) => color.slice(2))
			},
			colorVars() {
				return colorsProps[':root']
			},
			allColors() {
				return {
					colorsProps,
					colorsAlerts,
					colorsAlertsBg,
					colorsGray,
					colorsNeutral,
					colorsState,
					colorGradients,
					colorBrand,
					colorBrandBg,
					colorGrayBg,
					colorNeutralBg,
					colorStateBg,
				}
			},
		},
		methods: {
			getColor(color) {
				const l = parseInt(color.split(',')[2])
				return l <= 50 ? 'white' : 'black'
			},
			async copyToClipboard(e) {
				const el = e.target
				const text = el.dataset.item
				try {
					await navigator.clipboard.writeText(text)
					el.classList.add('copied')
				} catch (err) {
					console.error('Failed to copy text: ', err)
				} finally {
					setTimeout(() => {
						el.classList.remove('copied')
					}, 1000)
				}
			},
		},
		mounted() {},
	}
</script>

<style>
	.page-content {
		--col-width: 250px;
		display: grid;
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
	.copy-msg {
		display: none;
		font-size: 0.8em;
		font-family: monospace;
		text-decoration-line: underline;
		text-underline-offset: 4px;
		text-transform: capitalize;
		margin-left: 10px;
	}
	.copied > .copy-msg {
		display: inline-block;
	}
</style>