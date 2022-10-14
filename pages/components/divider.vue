<template>
   <div class="w-80">
        <mm-divider class="mb-5"/>
        <mm-divider class="mb-5" styled-line="bold" />
        <mm-divider class="mb-5" styled-line="2lines" />
        <mm-divider class="mb-5" styled-line="zigzag" />
        <mm-divider class="mb-5" styled-line="wavey" />
        <mm-divider class="mb-5" styled-line="dotted" />
   </div>
</template>

<script>
import MmDivider from '~/components/mm-components/divider/MmDivider.vue'

export default {
    layout: 'layout-components',
    components: { MmDivider }
}
</script>