<template>
	<div>
    <button class="btn size-32 circle btn-outline" @click="select(), model-=stepCount" :disabled="disabled"
      :aria-label="`${stepCount} step${ stepCount > 1 ? 's' : '' } down`"
      tabindex="-1"
    >
      <i aria-hidden="true" class="mmi mmi-minus" style="position: relative; top: 2px;" ></i>
    </button>

    <!-- {{ greaterThanMin }}

    {{ touched }} -->

    <input ref="input" :disabled="disabled" type="number"
      :value="model"
      :aria-valuenow="model"
      tabindex="0"
      :aria-valuemin="this.min"
      :aria-valuemax="this.max"
      :aria-label="ariaLabel"
      @keyup.esc="$event.target.value = model = value, $event.target.blur()"
      @keyup.enter="$emit('input', $event.target.value), $event.target.blur()"
      :class="{
        success: touched && (greaterThanMin && lessThanMax),
        error: error
      }"
    class="text-center border border-solid m-1 br-12 input">

    <button class="btn size-32 circle btn-outline" @click="select(), model+=stepCount" :disabled="disabled"
      :aria-label="`${stepCount} step${ stepCount > 1 ? 's' : '' } up`"
      tabindex="-1"
    >
      <!-- {{ `${stepCount} step${ stepCount > 1 ? 's' : '' } up` }} -->
      <i aria-hidden="true" class="mmi mmi-plus" style="position: relative; top: 2px;"></i>
    </button>
  </div>
</template>

<script>
	export default {
    props: {
      value: {
        type: String,
      },
      disabled: {
        type: Boolean,
      },
      min: {
        type: Number,
      },
      max: {
        type: Number,
      },
      stepCount: {
        type: Number,
        default: 1,
      },
      ariaLabel: {
        type: String
      }
    },
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
        model: this.min || 0,
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
        }, 100)
      }
    }
	}
</script>

<style scoped>



/* Chrome, Safari, Edge, Opera */
.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.input[type=number] {
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

.input[type=number]:hover {
  border-color: var(--navy) !important;
}

.input[type=number]:focus {
  color: var(--navy);
  border: 1px solid var(--navy-dark);
  outline-width: 0;
}

.input[type=number]:disabled {
  border-color: var(--gray-6) !important;
}

.btn:active {
  background-color: var(--navy-light) !important;
}

.btn:disabled {
  color: var(--gray-6) !important;
  background-color: var(--gray-3) !important;
}

.btn {
  border-width: 1px;
  border-color: var(--gray-4);
  /* border: 1px solid #D7D7D7; */
}


.size-32 {
  width: 32px;
  height: 32px;
}
</style>