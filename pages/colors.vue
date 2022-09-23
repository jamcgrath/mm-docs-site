<template>
	<div class="page-colors p-4">
		<mm-tabs>
			<mm-tab-panel id="colors-panel-1" tab-name="Colors" selected="true">
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
							@click="$copyToClipboard()"
							:data-item="colorVars[color]"
						>
							<span class="pointer-events-none">{{ colorVars[color] }}</span>
							<span class="copy-msg ml-2">copied</span>
						</button>
						<ul class="p-3 m-0" @click="$copyToClipboard($event)">
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
									<span class="copy-msg ml-2">copied</span>
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
			</mm-tab-panel>
			<mm-tab-panel id="colors-panel-2" tab-name="Docs">
				COLOR CSS table here
			</mm-tab-panel>
			<mm-tab-panel id="colors-panel-3" tab-name="CSS">
				COLOR CSS table here
			</mm-tab-panel>
		</mm-tabs>
	</div>
</template>

<script>
	import MmTabs from '~/components/mm-components/tab-panel/MmTabs.vue'
	import MmTabPanel from '~/components/mm-components/tab-panel/MmTabPanel.vue'
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
		components: {
			MmTabs,
			MmTabPanel,
		},
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
		},
	}
</script>

<style>
	.page-content {
		--col-width: 260px;
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
	.copied > .copy-msg {
		display: inline-block;
	}
</style>