<template>
	<div role="link" tabindex="0" class="notification flex p-4 cursor-pointer" :class="{ 'grape-10-bg': !read, 'gray-1-bg': !!read }"
    @mouseover="hovering = true"
    @mouseleave="hovering = false"
  >
		<div class="logo br-12 flex mr-4">
      <i aria-hidden="true" :class="classIcon"></i>
    </div>
    <div class="flex-1 flex-col flex">
      <div class="flex-1"></div>
      <div class="title-message">
        <span class="label_med navy-dark medium title-message">{{ label }}</span>
        <span class="label gray-6 regular title-message">{{ subLabel }}</span>
      </div>
      <div class="flex gray-5 mr-5 a-items-center bottom">
        <div class="flex-1 overline-small time">{{ time }}</div>
        <v-slot name="menu">
          <button type="button" class="btn btn-sm btn-circle menu" v-show="hovering">
            <i aria-hidden="true" class="mmi mmi-menu-horizontal-lite"></i>
          </button>
        </v-slot>
      </div>
    </div>
	</div>
</template>

<script>
	export default {
		props: {
			classIcon: {
        type: String,
        default: 'mmi mmi-podcast m-auto'
      },
      label: {
        type: String,
        default: 'Mamamia Out Loud'
      },
      subLabel: {
        type: String,
        default: 'new episode: Episode Title'
      },
      time: {
        type: String,
        default: '2 hours ago'
      },
      read: {
        type: Boolean
      }

		},
    data () {
      return {
        hovering: false
      }
    },
		mounted() {
		},
		computed: {
		},
		methods: {
		},
	}
</script>

<style scoped>
.menu {
  background-color: none;
}
.msg {
  flex-grow: 1;
  margin-bottom: auto;
}
  
.bottom {
  /* margin-top: 100%; */
  /* align-items: flex-end;
  position: relative;
  bottom: 4px; */
  min-height: 24px;
}
.notification {
  width: 375px;
  height: 85px;
}

.notification:hover {
  background-color: var(--grape-20);
}

.logo {
  position: relative;
  padding-top: 4px;
  min-width: 52px;
  min-height: 52px;
  background-color: var(--white);
}

.title-message {
  line-height: 17.5px !important;
  font-size: 14px !important;
  /* font-style: normal; */
}

.time {
  font-size: 9px;
  font-weight: 600;
  line-height: 9px;
  letter-spacing: 1px;
}


</style>