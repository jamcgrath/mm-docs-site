<template>
    <div>
        <div class="flex gap-5">
            <mm-spinner></mm-spinner>
            <mm-spinner width="70" aria-label="loading page 2"></mm-spinner>
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