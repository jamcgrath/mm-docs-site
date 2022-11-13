<template>
	<div
		class="mm-tooltip relative inline-block"
		:class="{
			'mm-tooltip-visible': displayTooltip,
			[`mm-tooltip-${theme}`]: theme,
		}"
		@focusin="showTooltip"
		@focusout="hideTooltip"
		@mouseenter="showTooltip"
		@mouseleave="hideTooltip"
	>
		<slot></slot>

		<transition name="tooltip-fade" @enter="enter">
			<span
				@mouseenter="userOnTooltip"
				@mouseleave="userOffTooltip"
				v-if="displayTooltip"
				role="tooltip"
				:id="tooltipId"
				class="tooltip-label label br-8 py-1 px-3 text-center shadow-med z-10"
				:class="[alignment, !displayTooltip ? 'tooltip-label-hide' : '']"
				ref="tooltip"
				>{{ tooltipText }}</span
			>
		</transition>
	</div>
</template>

<script>
	export default {
		props: {
			tooltipId: {
				type: String,
				default: 'tooltip-hint',
			},
			tooltipVisible: {
				type: Boolean,
				default: false,
			},
			tooltipText: {
				/* should never have a link or focusable element */
				type: String,
				default: 'This is the help text in the tooltip',
			},
			theme: {
				type: String,
				default: 'dark' /*  Possible values - dark, light */,
			},
			align: {
				type: String,
				default: 'bottom' /*  Possible values - bottom, top, left, right */,
			},
		},
		data() {
			return {
				displayTooltip: false,
				slotEl: null,
				mouseOnTooltip: false,
				tooltipLocation: 'bottom',
			}
		},
		computed: {
			alignment() {
				// create the alignment class only for top and bottom.
				// left and right can't be created with only css so don't need to check
				if (this.align === 'top' || this.align === 'bottom') {
					return `tooltip-${this.align}`
				}
			},
		},
		mounted() {
			if (this.tooltipVisible) {
				this.displayTooltip = true
			}
			//setup slot element
			this.slotEl = this.$el.firstChild
			this.slotEl.setAttribute('aria-describedby', this.tooltipId)
			this.slotEl.classList.add('mm-tooltip-slot')
			this.slotEl.setAttribute('data-triangle', this.align)

			document.addEventListener('keydown', this.globalEsc)
		},
		beforeDestroy() {
			document.removeEventListener('keydown', this.globalEsc)
		},
		methods: {
			userOnTooltip() {
				this.mouseOnTooltip = true
			},
			userOffTooltip() {
				if (!this.displayTooltip) {
					this.mouseOnTooltip = false
				}
			},
			enter(el, done) {
				if (this.align === 'left' || this.align === 'right') {
					this.positionTooltip(el)
				}
				this.checkXPosition(el)
				this.checkYPosition(el)
				this.checkToOffset(el)

				done()
			},
			checkYPosition(el) {
				const winHeight = window.innerHeight
				const { top, bottom } = el.getBoundingClientRect()

				if (top < 0) {
					el.classList.replace('tooltip-top', 'tooltip-bottom')
					this.slotEl.setAttribute('data-triangle', 'bottom')
				}
				if (bottom > winHeight) {
					el.classList.replace('tooltip-bottom', 'tooltip-top')
					this.slotEl.setAttribute('data-triangle', 'top')
				}
			},
			checkXPosition(el) {
				const winWidth = window.innerWidth
				const { left, right } = el.getBoundingClientRect()
				if (left < 0 || right > winWidth) {
					this.removeAllCssProps(el)
					el.classList.add('tooltip-bottom')
					this.slotEl.setAttribute('data-triangle', 'bottom')
				}
			},
			checkToOffset(el) {
				const winWidth = window.innerWidth
				const slotWidth = this.slotEl.getBoundingClientRect().width
				const { width, right, left } = el.getBoundingClientRect()

				if (width > slotWidth) {
					if (left < 0) {
						console.log(el)
						el.style.setProperty('--tooltip-translateX', `translateX(0)`)
						el.style.setProperty('--tooltip-x', '0')
					}
					if (right > winWidth) {
						el.style.setProperty(
							'--tooltip-translateX',
							`translateX(-${width - slotWidth}px)`
						)
						el.style.setProperty('--tooltip-x', '0')
					}
				}
			},
			positionTooltip(el) {
				const tooltipWidth = el.getBoundingClientRect().width
				const slotElWidth = this.slotEl.getBoundingClientRect().width
				const triangleHeight = 9

				let x = 0
				switch (this.align) {
					case 'left':
						x = (tooltipWidth + triangleHeight) * -1
						break
					case 'right':
						x = slotElWidth + triangleHeight
						break
				}
				el.style.setProperty('--tooltip-translateX', `translateX(${x}px)`)
				el.style.setProperty('--tooltip-translateY', `translateY(-50%)`)
				el.style.setProperty('--tooltip-y', '50%')
			},
			removeAllCssProps(el) {
				//style.removeProperty will remove item at a specified index
				while (el.style.item(0)) {
					el.style.removeProperty(el.style.item(0))
				}
			},
			showTooltip() {
				if (this.tooltipVisible) {
					return
				}
				if (this.mouseOnTooltip) {
					this.mouseOnTooltip = false
				}
				setTimeout(() => {
					this.displayTooltip = true
				}, 300)
			},
			hideTooltip() {
				if (this.tooltipVisible) {
					return
				}
				setTimeout(() => {
					this.displayTooltip = false
					if (this.mouseOnTooltip) {
						this.mouseOnTooltip = false
					}
					this.slotEl.setAttribute('data-triangle', this.align)
				}, 300)
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
	/* vue transition classes */
	.tooltip-fade-enter-active,
	.tooltip-fade-leave-active {
		opacity: 1;
	}

	.tooltip-fade-enter-from,
	.tooltip-fade-leave-to {
		opacity: 0;
	}

	.mm-tooltip {
		--tooltip-bg: var(--navy-dark);
		--tooltip-color: var(--white);
	}

	.tooltip-label {
		--tooltip-translateX: translateX(0);
		--tooltip-translateY: translateY(0);
		--tooltip-x: 0;
		--tooltip-y: 0;
		position: absolute;
		background: var(--tooltip-bg);
		color: var(--tooltip-color);
		line-height: var(--lh-125);
		display: inline-block;
		left: var(--tooltip-x);
		top: var(--tooltip-y);
		transform: var(--tooltip-translateX) var(--tooltip-translateY);
		max-width: 200px;
		width: max-content;
	}
	/* extend the area around the tooltip text bubble so users can move into it */
	.tooltip-label:before {
		content: '';
		position: absolute;
		inset: -9px;
		z-index: -1;
	}

	.tooltip-bottom {
		--tooltip-y: calc(100% + 9px);
		--tooltip-x: 50%;
		--tooltip-translateX: translateX(-50%);
	}
	.tooltip-top {
		--tooltip-y: calc(100% + 9px);
		--tooltip-x: 50%;
		--tooltip-translateX: translateX(-50%);
		top: unset;
		bottom: var(--tooltip-y);
	}

	.mm-tooltip-light {
		--tooltip-bg: var(--white);
		--tooltip-color: var(--navy-dark);
	}
	.mm-tooltip-slot {
		position: relative;
	}

	/* triangle  */
	.mm-tooltip-visible .mm-tooltip-slot:before {
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		border-style: solid;
		border-width: 0 5.195px 9px 5.195px;
		border-color: transparent transparent var(--tooltip-bg) transparent;
		box-shadow: var(--shadow-med);
	}
	[data-triangle='bottom'].mm-tooltip-slot:before {
		top: 100%;
	}
	[data-triangle='top'].mm-tooltip-slot:before {
		bottom: 100%;
		transform: rotate(180deg);
	}
	[data-triangle='left'].mm-tooltip-slot:before {
		right: 100%;
		transform: rotate(90deg);
	}
	[data-triangle='right'].mm-tooltip-slot:before {
		left: 100%;
		transform: rotate(-90deg);
	}
</style>
