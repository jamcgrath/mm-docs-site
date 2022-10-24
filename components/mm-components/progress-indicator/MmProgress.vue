<template>
    <div role="progress" class="progress-circular" aria-valuemin="0" :aria-valuemax="maxValue"
        :aria-valuenow="normalizedValue" :style="{ height: `${this.size}px`, width: `${this.size}px`}">
        <svg class="progress-circular-svg" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox"
            style="transform: rotate(-90deg);">
            <circle fill="transparent" :cx="2 * viewBoxSize" :cy="2 * viewBoxSize" :r="radius"
                :stroke-width="strokeWidth" :stroke-dasharray="strokeDashArray" stroke-dashoffset="0"
                class="progress-circular-underlay"></circle>
            <circle fill="transparent" :cx="2 * viewBoxSize" :cy="2 * viewBoxSize" :r="radius"
                :stroke-width="strokeWidth" :stroke-dasharray="strokeDashArray" :stroke-dashoffset="strokeDashOffset"
                class="progress-circular-overlay"></circle>
        </svg>
        <div class="progress-circular-info fw-500">{{contentValue}}</div>
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
            default: 5
        },
        width: {
            type: [Number, String],
            default: 3,
        },
        size: {
            type: [Number, String],
            default: 48
        }
    },
    data() {
        return {
            radius: 20
        }
    },
    computed: {
        contentValue() {
            return `${this.normalizedValue}/${this.maxValue}`
        },
        circumference() {
            return 2 * Math.PI * this.radius
        },
        normalizedValue() {
            if (this.value < 0) return 0
            if (parseFloat(this.value) > parseFloat(this.maxValue)) return parseFloat(this.maxValue)
            return parseFloat(this.value)
        },
        progressValue() {
            return (100 / parseFloat(this.maxValue)) * this.normalizedValue
        },
        viewBoxSize() {
            return this.radius / (1 - parseFloat(this.width) / parseFloat(this.size))
        },
        viewBox() {
            return `${this.viewBoxSize} ${this.viewBoxSize} ${2 * this.viewBoxSize} ${2 * this.viewBoxSize}`
        },
        strokeDashArray() {
            return Math.round(this.circumference * 1000) / 1000
        },
        strokeDashOffset() {
            return ((100 - this.progressValue) / 100) * this.circumference
        },
        strokeWidth() {
            return parseFloat(this.width) / parseFloat(this.size) * this.viewBoxSize * 2
        }
    }
}
</script>

<style scoped>
.progress-circular {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
}

.progress-circular-svg {
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
}

.progress-circular-underlay {
    stroke: var(--gray-3);
    z-index: 1;
}

.progress-circular-overlay {
    stroke: var(--grape);
    z-index: 2;
}

.progress-circular-info {
    align-items: center;
    display: flex;
    justify-content: center;
    color: var(--navy-dark);
    font-size: 10px;
    line-height: 12px;
}
</style>