<template>
    <div class="flex">
        <mm-spinner  />
        <mm-spinner value="25" />
        <mm-spinner value="50" />
        <mm-spinner value="75" />
        <mm-spinner value="100" />
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