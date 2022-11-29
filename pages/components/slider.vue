<template>
    <div>
        <mm-slider v-model="sliderValue" max="120" />
        <mm-slider v-model="sliderValue2" max="100" disabled />
        <mm-slider v-model="sliderValue1" max="120" step="10" width="250" :display-tooltip="false"/>
    </div>
</template>
<script>
import MmSlider from '~/components/mm-components/slider/MmSlider.vue';

export default {
    layout: 'layout-components',
    components: { MmSlider },
    data() {
        return {
            sliderValue: 20,
            sliderValue1: 50,
            sliderValue2: 30
        }
    }
}
</script>
<style scoped>

</style>