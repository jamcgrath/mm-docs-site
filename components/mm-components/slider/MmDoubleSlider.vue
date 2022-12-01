<template>
    <div class="mm-double-slider-wrapper" role="slider" tabindex="0" :aria-valuemin="min" :aria-valuemax="max"
        aria-labelledby="double slider" :id="id || randomId">
        <div class="mm-double-slider" :class="disabled && 'disabled'" :style="styles">
            <div class="mm-double-slider-progress" :class="disabled && 'disabled'" :id="`progress_${id || randomId}`">
            </div>
        </div>
        <div class="mm-double-silder-inputs">
            <span class="mm-double-slider-tooltip label" :id="`tooltip_${id || randomId}_from`" v-if="displayTooltip"
                v-show="showTooltip">{{
                        value[0]
                }}</span>
            <input type="range" class="mm-double-silder-input" :min="min" :max="max" :step="step" :value="value[0]"
                :id="`input_${id || randomId}_from`" :disabled="disabled" @input="sliderProgress('from')" />
            <span class="mm-double-slider-tooltip label" :id="`tooltip_${id || randomId}_to`" v-if="displayTooltip"
                v-show="showTooltip">{{
                        value[1]
                }}</span>
            <input type="range" class="mm-double-silder-input" :min="min" :max="max" :step="step" :value="value[1]"
                :id="`input_${id || randomId}_to`" :disabled="disabled" @input="sliderProgress('to')" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        id: String,
        value: Array,
        min: {
            type: [String, Number],
            default: 0
        },
        max: {
            type: [String, Number],
            default: 100
        },
        step: {
            type: [String, Number],
            default: 1
        },
        disabled: {
            type: Boolean,
            default: false
        },
        width: [String, Number],
        displayTooltip: {
            type: Boolean,
            default: true
        },
        timeoutTooltip: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            init: false,
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
            if (this.value) {
                this.init = true
                this.sliderProgress(this.value[0], 'from')
                this.sliderProgress(this.value[1], 'to')
                this.init = false
            }

            if (this.displayTooltip) {
                const sliderFrom = document.getElementById(`input_${this.id || this.randomId}_from`)
                const sliderTo = document.getElementById(`input_${this.id || this.randomId}_to`)

                this.eventListener([sliderFrom, sliderTo])
            }
        })
    },
    methods: {
        sliderProgress(type) {
            const sliderFrom = document.getElementById(`input_${this.id || this.randomId}_from`)
            const sliderTo = document.getElementById(`input_${this.id || this.randomId}_to`)
            const progress = document.getElementById(`progress_${this.id || this.randomId}`)

            if ((sliderTo.value - sliderFrom.value) < 1) {
                if (type === 'from') {
                    sliderFrom.value = parseFloat(sliderTo.value) - 1
                } else {
                    sliderTo.value = parseFloat(sliderFrom.value) + 1
                }
            }

            const fillValueFrom = (sliderFrom.value / this.max) * 100
            const fillValueTo = (sliderTo.value / this.max) * 100

            if (this.displayTooltip) {
                const tooltipFrom = document.getElementById(`tooltip_${this.id || this.randomId}_from`)
                const tooltipTo = document.getElementById(`tooltip_${this.id || this.randomId}_to`)

                tooltipFrom.style.left = `calc(${fillValueFrom}% + (${6.15 - fillValueFrom * 0.15}px))`
                tooltipTo.style.left = `calc(${fillValueTo}% + (${6.15 - fillValueTo * 0.15}px))`

                if (!this.init) {
                    this.showTooltip = true
                    this.tooltipTimeout()
                }
            }

            progress.style.left = `${fillValueFrom}%`
            progress.style.right = `${100 - fillValueTo}%`

            this.$emit('input', [parseFloat(sliderFrom.value), parseFloat(sliderTo.value)])
        },
        tooltipTimeout() {
            clearTimeout(this.idTimeout)

            this.idTimeout = setTimeout(() => {
                if (this.showTooltip) {
                    this.showTooltip = false
                    clearTimeout(this.idTimeout)
                }
            }, this.ms);
        },
        eventListener(elems) {
            const addMultipleEventListener = (element, events, handler) => {
                events.forEach(e => element.addEventListener(e, handler))
            }

            elems.forEach((sliderEl) => {
                addMultipleEventListener(sliderEl, ['mousedown', 'touchstart'], () => {
                    if (this.timeoutTooltip) {
                        this.tooltipTimeout()
                    }

                    this.showTooltip = true
                })

                addMultipleEventListener(sliderEl, ['mouseup', 'touchend'], () => {
                    this.showTooltip = false;
                    if (this.timeoutTooltip) {
                        clearInterval(this.idTimeout)
                    }
                })
            })
        }
    },
    computed: {
        styles() {
            if (this.width) {
                return {
                    width: this.width + 'px'
                }
            }
        }
    }
}
</script>
<style scoped>
.mm-double-slider-wrapper {
    position: relative;
    width: 100%;
    height: 20px;
    padding: 10px 0;
}

.mm-double-slider {
    width: 100%;
    height: 2px;
    position: relative;
    background: var(--gray-3);
    border-radius: 12px;
    top: 2px;
}

.mm-double-slider-progress {
    height: 100%;
    position: absolute;
    border-radius: 12px;
    background: var(--grape);
}

.mm-double-silder-inputs {
    position: relative;
}

.mm-double-silder-input {
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    width: 100%;
    height: 2px;
    background: none;
    pointer-events: none;
    outline: none;
}

.mm-double-silder-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--white);
    border: 7px solid var(--grape);
    cursor: pointer;
    pointer-events: auto;
}

.mm-double-silder-input:active::-webkit-slider-thumb {
    cursor: grabbing;
}

.mm-double-silder-input:disabled::-webkit-slider-thumb {
    border: 7px solid var(--gray-6);
    cursor: not-allowed;
}

.mm-double-slider-tooltip {
    background: var(--navy-dark);
    color: var(--white);
    padding: 3px 12px;
    position: absolute;
    border-radius: 4px;
    transform: translateX(-50%);
    bottom: 15px;
    height: 26px;
    max-width: 66px;
}

.mm-double-slider-tooltip::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 40%;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid var(--navy-dark);
}

.disabled {
    background: var(--gray-6);
}
</style>