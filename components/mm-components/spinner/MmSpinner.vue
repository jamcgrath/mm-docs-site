<template>
    <div role="spinner" aria-valuemin="0" aria-valuemax="100" :aria-valuenow="normalizedValue">
        <svg class="spinner" xmlns="http://www.w3.org/2000/svg" viewBox="23 23 48 48" style="transform: rotate(-90deg);">
            <circle fill="transparent" cx="48" cy="48" r="20" stroke-width="3" :stroke-dasharray="strokeDashArray"
                stroke-dashoffset="0" class="spinner-underlay"></circle>
            <circle fill="transparent" cx="48" cy="48" r="20" stroke-width="3" :stroke-dasharray="strokeDashArray"
                :stroke-dashoffset="strokeDashOffset" class="spinner-overlay"></circle>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: [Number, String],
            default: 0
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            radius: 20,
        }
    },
    computed: {
        circumference() {
            return 2 * Math.PI * this.radius
        },
        normalizedValue() {
            if (this.value < 0) return 0
            if (this.value > 100) return 100

            return parseFloat(this.value)
        },
        strokeDashArray() {
            return Math.round(Math.round(this.circumference * 1000) / 1000)
        },
        strokeDashOffset() {
            return `${Math.round(((100 - this.normalizedValue) / 100) * this.circumference)}px`
        }
    }
}
</script>

<style scoped>

.spinner {
    height: 100px;
    width: 100px;
    z-index: 0;
}

.spinner-underlay {
    stroke: var(--gray-3);
    z-index: 1;
}

.spinner-overlay {
    stroke-linecap: round;
    stroke: var(--navy);
    z-index: 2;
}
</style>
