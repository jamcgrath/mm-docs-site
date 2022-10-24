<template>
    <div class="w-50">
        <div class="flex mb-2">
            <mm-progress max-value="5" value="1"></mm-progress>
            <mm-progress max-value="5" value="2"></mm-progress>
            <mm-progress max-value="5" value="3"></mm-progress>
            <mm-progress max-value="5" value="4"></mm-progress>
            <mm-progress max-value="5" value="5"></mm-progress>
        </div>
        <div class="flex mb-2">
            <mm-progress-bar max-value="146" value="73"></mm-progress-bar>
        </div>
        <div class="flex">
            <mm-progress-bar value="73"></mm-progress-bar>
        </div>
    </div>
</template>
<script>
import MmProgress from '~/components/mm-components/progress-indicator/MmProgress.vue'
import MmProgressBar from '~/components/mm-components/progress-indicator/MmProgressBar.vue'

export default {
    layout: 'layout-components',
    components: {
        MmProgressBar,
        MmProgress
    }
}
</script>

<style scoped>
.progress-circular {
    margin: 1rem;
}
</style>