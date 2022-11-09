<template>
    <div>
        <mm-textarea class="mb-4" label="Label"></mm-textarea>
        <mm-textarea class="mb-4 success" label="Label"></mm-textarea>
        <mm-textarea class="mb-4 error" label="Label"></mm-textarea>
        <mm-textarea class="mb-4" label="Label" disabled></mm-textarea>
    </div>
</template>

<script>
import MmTextarea from '~/components/mm-components/textarea/MmTextarea.vue';

export default {
    layout: 'layout-components',
    components: {
        MmTextarea
    }
}
</script>

<style scoped>

</style>