<template>
    <div>
        <mm-post-it type="alert"
            label="Dolor sit amet, consectetur adipiscing elit. Sed ullamcorper pharetra felis eget cursus. 
            Pellentesque ipsum massa, posuere ut tellus ac, luctus varius sapien. Nulla eget ligula sed elit tincidunt pulvinar.">
        </mm-post-it>
        <mm-post-it class="mt-3" type="warning" label="Label"></mm-post-it>
        <mm-post-it class="mt-3" type="error" label="Label"></mm-post-it>
        <mm-post-it class="mt-3" type="success" label="Label"></mm-post-it>
        <mm-post-it class="mt-3" type="info" label="Label"></mm-post-it>
        <mm-post-it class="mt-3" type="neutral" label="Label"></mm-post-it>
    </div>
</template>
<script>
import MmPostIt from '~/components/mm-components/post-it/MmPostIt.vue';

export default {
    layout: 'layout-components',
    components: { MmPostIt }
}
</script>