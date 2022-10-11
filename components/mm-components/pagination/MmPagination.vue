<template>
	<div>
    <button v-show="pages > 5 && model > 3" type="button" class="btn btn-white btn-med box-shadow-med arrow">
      <i aria-hidden="true" class="mmi mmi-chevron-left icon"></i>
    </button>
    <button
      v-show="pages > 5 && model > 5"
      type="button" class="btn btn-med box-shadow-med fw-500 gray-7 ml-1 btn-white"
      @click="model -= 5"
    >
      ...
    </button>
    <button
      v-for="(i) in paginator"
      :key="'btn' + i"
      type="button" class="btn btn-med box-shadow-med fw-500 m-1 width-40 btn-white"
      :class="{
        'btn-secondary': i + 1 === model,
        'gray-7': i + 1 !== model
      }"
      @click="model = i + 1"
    >
			{{ i + 1 }}
		</button>
    <button
      v-show="pages > 5 && model < pages - 5"
      type="button" class="btn btn-med box-shadow-med fw-500 gray-7 mr-1 btn-white"
      @click="model += 5"
    >
      ...
    </button>
    <button v-show="pages > 5 && model < pages - 3" type="button" class="btn btn-white btn-med box-shadow-med arrow btn-white">
      <i aria-hidden="true" class="mmi mmi-chevron-right icon"></i>
    </button>
  </div>
</template>

<script>
	export default {
    props: {
      value: {
        type: Number,
      },
      pages: {
        type: Number,
        deafult: 100
      }
    },
    watch: {},
    data () {
      return {
        model: this.value || 2
      }
    },
    computed: {
      pagesArray () {
        return [...Array(this.pages).keys()]
      },
      paginator () {
        const currentIndex = this.model
        const arr = this.pagesArray
        console.log('pagesArray', arr)
        if (this.model <= 3) return arr.slice(0, 5)
        if (this.model >= this.pages - 3) return arr.slice(this.pages - 5)
        return arr.slice(currentIndex - 3, currentIndex - 3 + 5)
      }
    },
    methods: {
    }
	}
</script>

<style>
.gray-7 {
  color: var(--gray-7)
}

.fw-500 {
  font-weight: 500;
}

.width-40  {
  width: 40px !important; 
}

.btn-white:hover {
  background-color: var(--grape-10) !important;
}

.btn-white:active {
  background-color: var(--grape-light) !important;
}

.icon {
  position: relative;
  top: 2px;
}

.arrow {
  width: 40px;
  height: 40px;
  color: var(--navy-dark);
}
</style>