<template>
	<div class="mm-slider" :id="id || randomId" :style="styles">
		<span
			class="mm-slider-tooltip label"
			:id="`tooltip_${id || randomId}`"
			v-if="displayTooltip"
			v-show="showTooltip"
			>{{ value }}</span
		>
		<input
			type="range"
			class="mm-slider-input"
			:id="`input_${id || randomId}`"
			:value="value"
			:min="min"
			:max="max"
			:step="step"
			:disabled="disabled"
			@input="sliderProgress($event.target.value)"
			@focus="showTooltip = true"
			@blur="showTooltip = false"
			:aria-label="ariaLabel"
			:aria-labelledby="ariaLabelledby"
		/>
	</div>
</template>
<script>
	export default {
		props: {
			id: String,
			value: [String, Number],
			min: {
				type: [String, Number],
				default: 0,
			},
			max: {
				type: [String, Number],
				default: 100,
			},
			step: {
				type: [String, Number],
				default: 1,
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			width: [String, Number],
			displayTooltip: {
				type: Boolean,
				default: true,
			},
			timeoutTooltip: {
				type: Boolean,
				default: true,
			},
			ariaLabel: {
				type: [String, Boolean],
				defaule: false,
			},
			arialLabelledby: {
				type: [String, Boolean],
				defaule: false,
			},
		},
		data() {
			return {
				randomId: null,
				showTooltip: false,
				idTimeout: null,
				ms: 1000,
			}
		},
		mounted() {
			if (!this.id) {
				this.randomId = this.$nanoid()
			}

			this.$nextTick(() => {
				if (this.value > 0) {
					this.sliderProgress(this.value)
				}

				if (this.displayTooltip) {
					const slider = document.getElementById(
						`input_${this.id || this.randomId}`
					)
					const addMultipleEventListener = (element, events, handler) => {
						events.forEach((e) => element.addEventListener(e, handler))
					}

					addMultipleEventListener(slider, ['mousedown', 'touchstart'], () => {
						if (this.timeoutTooltip) {
							this.tooltipTimeout()
						} else {
							this.showTooltip = true
						}
					})

					addMultipleEventListener(slider, ['mouseup', 'touchend'], () => {
						this.showTooltip = false
						if (this.timeoutTooltip) {
							clearInterval(this.idTimeout)
						}
					})
				}
			})
		},
		methods: {
			sliderProgress(value) {
				const fillValue = ((value - this.min) * 100) / (this.max - this.min)
				const slider = document.getElementById(
					`input_${this.id || this.randomId}`
				)
				const fill = this.disabled ? '--gray-6' : '--grape'
				slider.style.background = `linear-gradient(90deg, var(${fill}) ${fillValue}%, var(--gray-3) ${
					fillValue + 0.1
				}%)`

				if (this.displayTooltip) {
					const tooltip = document.getElementById(
						`tooltip_${this.id || this.randomId}`
					)
					tooltip.style.left = `calc(${fillValue}% + (${
						6.15 - fillValue * 0.15
					}px))`
				}

				this.$emit('input', value)
			},
			tooltipTimeout() {
				this.showTooltip = true
				clearTimeout(this.idTimeout)

				this.idTimeout = setTimeout(() => {
					if (this.showTooltip) {
						this.showTooltip = false
						clearTimeout(this.idTimeout)
					}
				}, this.ms)
			},
		},
		computed: {
			styles() {
				if (this.width) {
					return {
						width: this.width + 'px',
					}
				}
			},
		},
		watch: {
			value(newValue) {
				if (newValue && this.timeoutTooltip) {
					this.tooltipTimeout()
				}
			},
		},
	}
</script>
<style>
	.mm-slider {
		position: relative;
		width: 100%;
	}

	.mm-slider-input {
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		height: 2px;
		border-radius: 12px;
		background: var(--gray-3);
		outline: none;
	}

	.mm-slider-input::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--white);
		border: 7px solid var(--grape);
		cursor: pointer;
	}

	.mm-slider-input:active::-webkit-slider-thumb {
		cursor: grabbing;
	}

	.mm-slider-input:disabled::-webkit-slider-thumb {
		border: 7px solid var(--gray-6);
		cursor: not-allowed;
	}

	.mm-slider-tooltip {
		background: var(--navy-dark);
		color: var(--white);
		padding: 3px 12px;
		position: absolute;
		border-radius: 4px;
		transform: translateX(-50%);
		bottom: 20px;
		height: 26px;
		max-width: 66px;
	}

	.mm-slider-tooltip::after {
		content: '';
		position: absolute;
		bottom: -6px;
		left: 40%;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-top: 7px solid var(--navy-dark);
	}
</style>