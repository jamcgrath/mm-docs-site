<template>
    <div>
        <div class="flex mb-4">
            <mm-spinner></mm-spinner>
        </div>
        <div class="flex mb-4">
            <mm-spinner width="70" aria-label="loading page 2"></mm-spinner>
        </div>
        <div class="flex">
            <mm-spinner width="100" aria-label="loading page 3"></mm-spinner>
        </div>
    </div>
</template>

<script>
import MmSpinner from '~/components/mm-components/spinner/MmSpinner.vue';

export default {
    layout: 'layout-components',
    components: {
        MmSpinner
    }
}
</script>