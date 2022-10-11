<template>
	<div>
    <button class="size-32 circle btn-outline" @click="model--" :disabled="disabled">
      <i aria-hidden="true" class="mmi mmi-minus" style="position: relative; top: 2px;" ></i>
    </button>

    <!-- {{ greaterThanMin }}

    {{ touched }} -->

    <input ref="input" :disabled="disabled" type="number" :value="model"
      @keyup.esc="$event.target.value = model = value, $event.target.blur()"
      @keyup.enter="$emit('input', $event.target.value), $event.target.blur()"
      :class="{
        success: touched && (greaterThanMin && lessThanMax),
        error: error
      }"
    class="text-center border border-solid m-1 br-12 ">

    <button class="size-32 circle btn-outline" @click="select(), model++" :disabled="disabled">
      <i aria-hidden="true" class="mmi mmi-plus" style="position: relative; top: 2px;"></i>
    </button>
  </div>
</template>

<script>
	export default {
    props: ['value', 'disabled', 'min', 'max'],
    watch: {
      value (newVal) {
        this.model = newVal
      },
      model (newVal) {
        this.touched = true
        this.$emit('input', newVal)
      }
    },
    data () {
      return {
        model: 0,
        touched: false
      }
    },
    computed: {
      greaterThanMin () {
        if (this.min === undefined) return true
        return this.model >= this.min
      },
      lessThanMax () {
        if (this.max === undefined) return true
        return this.model <= this.max
      },
      error () {
        if (this.touched && !(this.greaterThanMin && this.lessThanMax)) {
          this.$emit('error', true)
          return true
        }
        return false
      }
    },
    methods: {
      select () {
        this.$refs.input.select()
        setTimeout(() => {
          this.$refs.input.select()
        }, 200)
      }
    }
	}
</script>

<style scoped>

button:disabled {
  color: var(--gray-6)
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  width: 86px;
  height: 46px;
  -moz-appearance: textfield;
  border-style: solid;
  border-color: var(--gray-4);
  color: var(--gray-6);
}

.success {
  border: 1px solid var(--success) !important;
}

.error {
  border: 1px solid var(--error) !important;
}

input[type=number]:hover {
  border-color: var(--navy) !important;
}

input[type=number]:focus {
  color: var(--navy);
  border: 1px solid var(--navy-dark);
  outline-width: 0;
}

input[type=number]:disabled {
  border-color: var(--gray-6) !important;
}

button {
  border-color: var(--gray-4);
  /* border: 1px solid #D7D7D7; */
}
.size-32 {
  width: 32px;
  height: 32px;
}
</style>