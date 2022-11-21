<template>
  <div>
    <button type="button" class="btn btn-sm btn-primary" @click="modal1 = true">
      Open Modal 1
    </button>
    <button type="button" class="btn btn-sm btn-primary" @click="modal2 = true">
      Open Modal 2
    </button>
    <mm-modal v-model="modal1">
      <template v-slot:head>Header</template>
      <template v-slot:base>
        <div class="mb-3 p-3">
          Et purus tincidunt massa libero. Phasellus imperdiet.
        </div>
        <div class="flex flex-wrap j-content-flex-end gap-3">
          <button
            type="button"
            class="btn btn-sm btn-outline"
            @click="modal1 = false"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-sm btn-primary"
            @click="modal1 = false"
          >
            End Session
          </button>
        </div>
      </template>
    </mm-modal>
    <mm-modal v-model="modal2">
      <template v-slot:head>Header</template>
      <template v-slot:base>
        <MmPostIt :label="obj" type="info" class="mb-3"></MmPostIt>
        <div class="div-thick mb-3"></div>
        <mm-textarea
          label="textarea label"
          placeHolder="textarea placeholder"
          class="mb-3"
          v-model="obj.textarea_1"
        ></mm-textarea>
        <mm-textarea
          label="textarea label"
          class="mb-3"
          v-model="obj.textarea_2"
        ></mm-textarea>
        <div class="div-thick mb-3"></div>
        <div class="flex gap-5 mb-3">
          <MmRadio
            label="Radio Button 1"
            name="radio"
            radioValue="radio_button_1"
            v-model="obj.radio"
          >
          </MmRadio>
          <MmRadio
            label="Radio Button 2"
            name="radio"
            radioValue="radio_button_2"
            v-model="obj.radio"
          >
          </MmRadio>
        </div>
        <div class="div-thick mb-3"></div>
        <div class="flex flex-wrap j-content-flex-end gap-3">
          <button
            type="button"
            class="btn btn-sm btn-outline"
            @click="modal2 = false"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-sm btn-primary"
            @click="obj = {}"
          >
            Clear
          </button>
        </div>
      </template>
    </mm-modal>
  </div>
</template>
<script>
import MmModal from '~/components/mm-components/modal/MmModal.vue'
import MmPostIt from '~/components/mm-components/post-it/MmPostIt.vue'
import MmRadio from '~/components/mm-components/radio/MmRadio.vue'
import MmTextarea from '~/components/mm-components/textarea/MmTextarea.vue'
import MmToggleButton from '~/components/mm-components/toggle-button/MmToggleButton.vue'

export default {
  layout: 'layout-components',
  components: { MmModal, MmTextarea, MmPostIt, MmRadio, MmToggleButton },
  data() {
    return {
      modal1: false,
      modal2: false,
      obj: {},
    }
  },
}
</script>
<style></style>
