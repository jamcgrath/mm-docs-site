<template>
    <div>
        <mm-textarea class="mb-4" label="Label"></mm-textarea>
        <mm-textarea class="mb-4" label="Label" required></mm-textarea>
        <mm-textarea class="mb-4" label="Label" disabled></mm-textarea>
        <mm-textarea class="mb-4" label="Label" :resize="false"></mm-textarea>
        <mm-textarea class="mb-4" label="Label" :resize="false" required></mm-textarea>
        <mm-textarea class="mb-4" label="Label" :resize="false" disabled></mm-textarea>
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