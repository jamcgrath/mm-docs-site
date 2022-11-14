<template>
    <div>
        {{ radioValue }}
        <div class="flex gap-5">
            <mm-radio class="mt-3" radioValue="radio_0_empty_label" name="radio_test" v-model="radioValue"></mm-radio>
            <mm-radio class="mt-3" label="Radio 1" radioValue="radio_1" name="radio_test" v-model="radioValue">
            </mm-radio>
            <mm-radio class="mt-3" label="Radio 2" radioValue="radio_2" name="radio_test" v-model="radioValue">
            </mm-radio>
        </div>
        <div class="div-thin mt-3"></div>
        <mm-radio class="mt-3"></mm-radio>
        <mm-radio class="mt-3" label="Checked Radio" checked></mm-radio>
        <mm-radio class="mt-3" label="Disabled checked radio" checked disabled></mm-radio>
        <mm-radio class="mt-3" label="Disabled radio" disabled></mm-radio>
    </div>
</template>
<script>
import MmRadio from '~/components/mm-components/radio/MmRadio.vue'

export default {
    layout: 'layout-components',
    components: {
        MmRadio,
    },
    data() {
        return {
            radioValue: 'radio_1'
        }
    }
}
</script>