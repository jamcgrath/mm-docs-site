<template>
    <div role="progress-bar" aria-valuemin="0" :aria-valuemax="maxValue" :aria-valuenow="normalizedValue"
        class="progress-bar" :style="{height: height + 'px'}">
        <div class="progress-bar-background" :style="backgroundStyle">
        </div>
        <div class="progress-bar-active" :style="{width: activeValue + '%'}">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: [Number, String],
            default: 0,
        },
        maxValue: {
            type: [Number, String],
            default: 100,
        },
        height: {
            type: [Number, String],
            default: 4,
        }
    },
    computed: {
        normalizedValue() {
            if (this.value < 0) return 0
            if (parseFloat(this.value) > parseFloat(this.maxValue)) return parseFloat(this.maxValue)
            return parseFloat(this.value)
        },
        activeValue() {
            return (this.normalizedValue / parseFloat(this.maxValue)) * 100
        },
        backgroundStyle() {
            return {
                opacity: 0.3,
                left: `${this.activeValue}%`,
                width: `${100 - this.activeValue}%`
            }
        }
    }
}
</script>

<style scoped>
.progress-bar {
    background: transparent;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: 100px;
}

.progress-bar-background {
    background: var(--gray-3);
    bottom: 0;
    left: 0;
    position: absolute;
    top: 0;
}

.progress-bar-active {
    background: var(--grape);
    height: inherit;
    left: 0;
    position: absolute;
}
</style>