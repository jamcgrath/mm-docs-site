<template>
    <div>
        <mm-slider v-model="sliderValue" max="100" />
        <mm-slider v-model="sliderValue1" max="100" :timeout-tooltip="false"/>
        <mm-slider v-model="sliderValue2" max="100" step="10" :display-tooltip="false"/>
        <mm-slider v-model="sliderValueDisabled" max="100" disabled />
        <mm-slider v-model="sliderValue3" max="100" step="10" width="250" />
        <mm-double-slider v-model="doubleSlider" max="200" />
        <mm-double-slider v-model="doubleSliderDisabled" max="200" disabled />
    </div>
</template>
<script>
import MmDoubleSlider from '~/components/mm-components/slider/MmDoubleSlider.vue';
import MmSlider from '~/components/mm-components/slider/MmSlider.vue';

export default {
    layout: 'layout-components',
    components: { MmSlider, MmDoubleSlider },
    data() {
        return {
            sliderValue: 10,
            sliderValue1: 20,
            sliderValue2: 30,
            sliderValue3: 40,
            sliderValueDisabled: 50,
            doubleSlider: [35, 65],
            doubleSliderDisabled: [35, 65],
        }
    }
}
</script>
<style scoped>

</style>