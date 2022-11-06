<template>
	<div
		class="mm-tooltip relative inline-block"
		@focusin="showTooltip"
		@focusout="hideTooltip"
		@mouseenter="showTooltip"
		@mouseleave="hideTooltip"
	>
		<slot></slot>
		<span
			role="tooltip"
			:id="tooltipId"
			class="
				tooltip-label
				pointer-events-none
				label
				br-8
				py-1
				px-3
				text-center
				shadow-med
			"
			:class="[`tooltip-${theme}`, `tooltip-${align}`]"
			ref="tooltipLabel"
			>{{ tooltipText }}</span
		>
	</div>
</template>

<script>
	export default {
		props: {
			tooltipId: {
				type: String,
				default: 'tooltip-hint',
			},
			showTip: {
				type: Boolean,
				default: false,
			},
			tooltipText: {
				type: String,
				default: 'This is the help text in the tooltip',
			},
			theme: {
				type: String,
				default: 'dark' /*  Possible values - dark, light */,
			},
			align: {
				type: String,
				default: 'bottom' /*  Possible values - bottom, top, left , right*/,
			},
			offset: {
				type: String,
				default: 'none' /*  Possible values - none, left , right */,
			},
		},
		data() {
			return {
				showLabel: true,
				toolTipEl: null,
			}
		},
		computed: {
			tooltipTheme() {
				if (this.theme == 'light') {
					return 'tooltip-theme-light'
				}
			},
			computedClass() {
				var className = ''
				if (this.theme == 'dark') {
					className = 'tooltip-pad-dark'
				} else {
					className = 'tooltip-pad-white'
				}
				if (this.offset == 'none') {
					if (this.align == 'up') {
						className = className + ' tooltip-pad-up'
					} else if (this.align == 'left') {
						className = className + ' tooltip-pad-left'
					} else if (this.align == 'right') {
						className = className + ' tooltip-pad-right'
					} else {
						className = className + ' tooltip-pad-down'
					}
				} else {
					var finalEnd = ''
					var defaultAlign = 'down'
					if (this.align != 'up' && this.align != 'down') {
						finalEnd = this.offset + '-' + defaultAlign
					} else {
						finalEnd = this.offset + '-' + this.align
					}
					className = className + ' ' + 'tooltip-pad-' + finalEnd
				}
				console.log('Final classname = ' + className)
				return className
			},
		},
		beforeMount() {},
		mounted() {
			// this.showLabel = false
			this.toolTipEl = this.$el.firstChild
			this.toolTipEl.setAttribute('aria-describedby', this.tooltipId)
			document.addEventListener('keydown', this.globalEsc)
			if (this.align === 'left' || this.align === 'right') {
				this.positionToolTip()
			}
		},
		beforeDestroy() {
			document.removeEventListener('keydown', this.globalEsc)
		},
		methods: {
			positionToolTip() {
				console.log('yolo')
				const { width: labelWidth, height: labelHeight } =
					this.$refs.tooltipLabel.getBoundingClientRect()
				const { width: ttElWidth, height: ttElHeight } =
					this.toolTipEl.getBoundingClientRect()
				const triangleHeight = 9
				let x = 0
				let y = 0
				switch (this.align) {
					case 'left':
						x = (labelWidth + triangleHeight) * -1
						y = ttElHeight / 2 - labelHeight / 2
						break
					case 'right':
						x = ttElWidth + triangleHeight
						y = ttElHeight / 2 - labelHeight / 2
						break
				}
				console.log('here', x, y)
				this.$refs.tooltipLabel.style.setProperty(
					'--tooltip-pos',
					`translate(${x}px, -50%)`
				)
				// console.log(x, y)
				// this.toolTipPos = {
				// 	x,
				// 	y,
				// }
			},
			showTooltip() {
				this.showLabel = true
				// const { x, y } = this.toolTipPos
				// this.$nextTick(() => this.positionToolTip())
			},
			hideTooltip() {
				this.showLabel = false
			},
			globalEsc(e) {
				if ((e.keyCode || e.which) === 27) {
					this.hideTooltip()
				}
			},
		},
	}
</script>

<style scoped>
	.tooltip-label {
		--tooltip-bg: var(--navy-dark);
		--tooltip-color: var(--white);
		--tooltip-pos: translate(-50%);
		--tooltip-top: calc(100% + 9px);
		--tooltip-left: 50%;
		position: absolute;
		background: var(--tooltip-bg);
		color: var(--tooltip-color);
		line-height: var(--lh-125);
		display: inline-block;
		left: var(--tooltip-left);
		top: var(--tooltip-top);
		transform: var(--tooltip-pos);
		max-width: 200px;
		width: max-content;
		display: hidden;
		opacity: 1;
	}
	.tooltip-bottom {
		top: var(--tooltip-top);
	}
	.tooltip-top {
		top: unset;
		bottom: var(--tooltip-top);
	}

	.tooltip-right,
	.tooltip-left {
		--tooltip-left: 0;
		--tooltip-top: 50%;
	}

	/* .tooltip-label:before {
																						  content: '';
																						  display: block;
																						  width: 0;
																						  height: 0;
																						  position: absolute;
																						  border-style: solid;
																						  border-width: 9px 5.195px 0 5.195px;
																						  border-color: var(--navy-dark) transparent transparent transparent;
																						  bottom: -9px;
																						  left: 50%;
																						  transform: translateX(-50%);
																						} */

	.tooltip-light {
		--tooltip-bg: var(--white);
		--tooltip-color: var(--navy-dark);
	}
	.tooltip-pad {
		max-width: 193px;
		position: relative;
	}
	.tooltip-pad-dark {
		background-color: var(--navy-dark);
		color: var(--white);
	}
	.tooltip-pad-white {
		background-color: var(--white);
		color: var(--navy-dark);
	}
	.tooltip-pad:before {
		content: '';
		display: block;
		width: 0;
		height: 0;
		position: absolute;
		border-style: solid;
		border-width: 9px 5.195px 0 5.195px;
		border-color: var(--navy-dark) transparent transparent transparent;
	}
	/* Styles for dark theme center triangle */
	.tooltip-pad-dark.tooltip-pad-down:before {
		border-width: 9px 5.195px 0 5.195px;
		border-color: var(--navy-dark) transparent transparent transparent;
		top: 100%;
	}
	.tooltip-pad-dark.tooltip-pad-up:before {
		border-width: 0 5.195px 9px 5.195px;
		border-color: transparent transparent var(--navy-dark) transparent;
		bottom: 100%;
	}
	.tooltip-pad-dark.tooltip-pad-left:before {
		border-width: 5.195px 9px 5.195px 0;
		border-color: transparent var(--navy-dark) transparent transparent;
		right: 100%;
	}
	.tooltip-pad-dark.tooltip-pad-right:before {
		border-width: 5.195px 0 5.195px 9px;
		border-color: transparent transparent transparent var(--navy-dark);
		left: 100%;
	}
	/* Styles for white theme center triangle */
	.tooltip-pad-white.tooltip-pad-down:before {
		border-width: 9px 5.195px 0 5.195px;
		border-color: var(--white) transparent transparent transparent;
		top: 100%;
	}
	.tooltip-pad-white.tooltip-pad-up:before {
		border-width: 0 5.195px 9px 5.195px;
		border-color: transparent transparent var(--white) transparent;
		bottom: 100%;
	}
	.tooltip-pad-white.tooltip-pad-left:before {
		border-width: 5.195px 9px 5.195px 0;
		border-color: transparent var(--white) transparent transparent;
		right: 100%;
	}
	.tooltip-pad-white.tooltip-pad-right:before {
		border-width: 5.195px 0 5.195px 9px;
		border-color: transparent transparent transparent var(--white);
		left: 100%;
	}
	/* Styles for dark theme offset triangle */
	.tooltip-pad-dark.tooltip-pad-right-down:before {
		border-width: 9px 5.195px 0 5.195px;
		border-color: var(--navy-dark) transparent transparent transparent;
		top: 100%;
		right: 10px;
	}
	.tooltip-pad-dark.tooltip-pad-right-up:before {
		border-width: 0 5.195px 9px 5.195px;
		border-color: transparent transparent var(--navy-dark) transparent;
		bottom: 100%;
		right: 10px;
	}
	.tooltip-pad-dark.tooltip-pad-left-down:before {
		border-width: 9px 5.195px 0 5.195px;
		border-color: var(--navy-dark) transparent transparent transparent;
		top: 100%;
		left: 10px;
	}
	.tooltip-pad-dark.tooltip-pad-left-up:before {
		border-width: 0 5.195px 9px 5.195px;
		border-color: transparent transparent var(--navy-dark) transparent;
		bottom: 100%;
		left: 10px;
	}
	/* Styles for white theme offset triangle */
	.tooltip-pad-white.tooltip-pad-right-down:before {
		border-width: 9px 5.195px 0 5.195px;
		border-color: var(--white) transparent transparent transparent;
		top: 100%;
		right: 10px;
	}
	.tooltip-pad-white.tooltip-pad-right-up:before {
		border-width: 0 5.195px 9px 5.195px;
		border-color: transparent transparent var(--white) transparent;
		bottom: 100%;
		right: 10px;
	}
	.tooltip-pad-white.tooltip-pad-left-down:before {
		border-width: 9px 5.195px 0 5.195px;
		border-color: var(--white) transparent transparent transparent;
		top: 100%;
		left: 10px;
	}
	.tooltip-pad-white.tooltip-pad-left-up:before {
		border-width: 0 5.195px 9px 5.195px;
		border-color: transparent transparent var(--white) transparent;
		bottom: 100%;
		left: 10px;
	}
</style>
