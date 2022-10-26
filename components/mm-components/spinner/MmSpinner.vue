<template>
    <div role="status" aria-label="loading">
        <svg class="mm-spinner-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"
            :style="{ width: width + 'px', height: width + 'px' }">
            <circle fill="transparent" cx="26" cy="26" r="24" stroke-width="3" stroke-dasharray="157"
                stroke-dashoffset="0" class="mm-spinner-underlay"></circle>
            <circle fill="transparent" cx="26" cy="26" r="24" stroke-width="3" stroke-dasharray="157"
                stroke-dashoffset="157" class="mm-spinner-overlay"></circle>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: [String, Number],
            default: 52
        }
    }
}
</script>

<style scoped>
.mm-spinner-svg {
    width: 52px;
    height: 52px;
    transform: rotate(-90deg);
}

.mm-spinner-underlay {
    stroke: var(--gray-3);
    z-index: 1;
}

.mm-spinner-overlay {
    stroke-linecap: round;
    stroke: var(--navy);
    z-index: 2;
    --spin: 1.4s;
    -webkit-animation: spinner var(--spin) infinite;
    animation: spinner var(--spin) infinite;
}

@keyframes spinner {
    0% {
        stroke-dashoffset: 157;
    }

    100% {
        stroke-dashoffset: 0;
    }
}
</style>
