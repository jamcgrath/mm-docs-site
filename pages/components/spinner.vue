<template>
    <div>
        <div class="flex mb-4">
            <mm-spinner></mm-spinner>
        </div>
        <div class="flex">
            <mm-spinner width="100"></mm-spinner>
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