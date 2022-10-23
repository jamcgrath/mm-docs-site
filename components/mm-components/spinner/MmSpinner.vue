<template>
    <div role="spinner" aria-valuemin="0" aria-valuemax="100">
        <svg class="spinner-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"
            style="transform: rotate(-90deg);">
            <circle fill="transparent" cx="26" cy="26" r="24" stroke-width="3" stroke-dasharray="157"
                stroke-dashoffset="0" class="spinner-underlay"></circle>
            <circle fill="transparent" cx="26" cy="26" r="24" stroke-width="3" stroke-dasharray="157"
                stroke-dashoffset="157" class="spinner-overlay"></circle>
        </svg>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.spinner-svg {
    height: 52px;
    width: 52px;
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
    --spin: 2s;
    -webkit-animation: dash var(--spin) infinite;
    animation: dash var(--spin) infinite;
}

@keyframes dash {
    0% {
        stroke-dashoffset: 157;
    }

    25% {
        stroke-dashoffset: 126;
    }

    50% {
        stroke-dashoffset: 79;
    }

    75% {
        stroke-dashoffset: 47;
    }

    100% {
        stroke-dashoffset: 0;
    }
}
</style>
