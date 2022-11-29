<template>
    <div>
        <mm-slider v-model="sliderValue" max="100" />
        <mm-slider v-model="sliderValue1" max="100" :timeout-tooltip="false"/>
        <mm-slider v-model="sliderValue2" max="100" step="10" :display-tooltip="false"/>
        <mm-slider v-model="sliderValueDisabled" max="100" disabled />
        <mm-slider v-model="sliderValue3" max="100" step="10" width="250" />
    </div>
</template>
<script>
import MmSlider from '~/components/mm-components/slider/MmSlider.vue';

export default {
    layout: 'layout-components',
    components: { MmSlider },
    data() {
        return {
            sliderValue: 10,
            sliderValue1: 20,
            sliderValue2: 30,
            sliderValue3: 40,
            sliderValueDisabled: 50,
        }
    }
}
</script>
<style scoped>

</style>