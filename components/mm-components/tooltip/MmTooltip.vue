<template>
  <div :id="tooltipId" aria-hidden="true" class="btn btn-primary tooltip-pad" :class="computedClass" v-show="showTip">
    <span class="label">{{tooltipText}}</span>
  </div>
</template>

<script>
	export default {
		props: {
			tooltipId: {
				type: String,
				default: 'tooltip-hint',
			},
      showTip: {
				type: Boolean,
				default: false,
			},
			tooltipText: {
				type: String,
				default: 'This is the help text in the tooltip',
			},
      theme: {
				type: String,
				default: 'dark', /*  Possible values - dark, white */
			},
      align: {
				type: String,
				default: 'up', /*  Possible values - up, down, left , right*/
			},
      offset: {
				type: String,
				default: 'none', /*  Possible values - none, left , right */
			},
		},
		data() {
			return {
				showClear: false,
			}
		},
    computed: {
      computedClass() {
        var className = '';
        if(this.theme == 'dark'){
          className = 'tooltip-pad-dark';
        } else {
          className = 'tooltip-pad-white';
        }
        if(this.offset == 'none'){
          if(this.align == 'up'){
            className = className+' tooltip-pad-up';
          } else if(this.align == 'left') {
            className = className+' tooltip-pad-left';
          } else if(this.align == 'right'){
            className = className+' tooltip-pad-right';
          } else {
            className = className+' tooltip-pad-down';
          }
        } else {
          var finalEnd = '';
          var defaultAlign = 'down';
          if(this.align != 'up' && this.align != 'down'){
            finalEnd = this.offset+'-'+defaultAlign;
          } else {
            finalEnd = this.offset+'-'+this.align;
          }
          className = className+' '+'tooltip-pad-'+finalEnd;
        }
        console.log('Final classname = '+className);
        return className;
      } 
    },
		methods: {

		},
	}
</script>

<style scoped>
.tooltip-pad {
  border-radius: var(--space-1);
  padding: var(--space-1) var(--space-3);
  max-width:193px;
  position: relative;
}
.tooltip-pad-dark {
  background-color: var(--navy-dark);
  color: var(--white);
}
.tooltip-pad-white {
  background-color: var(--white);
  color: var(--navy-dark);
}
.tooltip-pad:before{
    content:'';
    display:block;
    width:0;
    height:0;
    position:absolute;    
    border-style: solid;
}
/* Styles for dark theme center triangle */
.tooltip-pad-dark.tooltip-pad-down:before{
    border-width: 9px 5.195px 0 5.195px;
    border-color: var(--navy-dark) transparent transparent transparent;
    top: 100%;
}
.tooltip-pad-dark.tooltip-pad-up:before{
    border-width: 0 5.195px 9px 5.195px;
    border-color: transparent transparent var(--navy-dark) transparent;
    bottom: 100%;
}
.tooltip-pad-dark.tooltip-pad-left:before{
    border-width: 5.195px 9px 5.195px 0;
    border-color: transparent var(--navy-dark) transparent transparent;
    right: 100%;
}
.tooltip-pad-dark.tooltip-pad-right:before{
    border-width:  5.195px 0  5.195px 9px;
    border-color: transparent transparent transparent var(--navy-dark);
    left: 100%;
}
/* Styles for white theme center triangle */
.tooltip-pad-white.tooltip-pad-down:before{
    border-width: 9px 5.195px 0 5.195px;
    border-color: var(--white) transparent transparent transparent;
    top: 100%;
}
.tooltip-pad-white.tooltip-pad-up:before{
    border-width: 0 5.195px 9px 5.195px;
    border-color: transparent transparent var(--white) transparent;
    bottom: 100%;
}
.tooltip-pad-white.tooltip-pad-left:before{
    border-width: 5.195px 9px 5.195px 0;
    border-color: transparent var(--white) transparent transparent;
    right: 100%;
}
.tooltip-pad-white.tooltip-pad-right:before{
    border-width:  5.195px 0  5.195px 9px;
    border-color: transparent transparent transparent var(--white);
    left: 100%;
}
/* Styles for dark theme offset triangle */
.tooltip-pad-dark.tooltip-pad-right-down:before{
    border-width: 9px 5.195px 0 5.195px;
    border-color: var(--navy-dark) transparent transparent transparent;
    top: 100%;
    right:10px;
}
.tooltip-pad-dark.tooltip-pad-right-up:before{
    border-width: 0 5.195px 9px 5.195px;
    border-color: transparent transparent var(--navy-dark) transparent;
    bottom: 100%;
    right:10px;
}
.tooltip-pad-dark.tooltip-pad-left-down:before{
    border-width: 9px 5.195px 0 5.195px;
    border-color: var(--navy-dark) transparent transparent transparent;
    top: 100%;
    left:10px;
}
.tooltip-pad-dark.tooltip-pad-left-up:before{
    border-width: 0 5.195px 9px 5.195px;
    border-color: transparent transparent var(--navy-dark) transparent;
    bottom: 100%;
    left:10px;
}
/* Styles for white theme offset triangle */
.tooltip-pad-white.tooltip-pad-right-down:before{
    border-width: 9px 5.195px 0 5.195px;
    border-color: var(--white) transparent transparent transparent;
    top: 100%;
    right:10px;
}
.tooltip-pad-white.tooltip-pad-right-up:before{
    border-width: 0 5.195px 9px 5.195px;
    border-color: transparent transparent var(--white) transparent;
    bottom: 100%;
    right:10px;
}
.tooltip-pad-white.tooltip-pad-left-down:before{
    border-width: 9px 5.195px 0 5.195px;
    border-color: var(--white) transparent transparent transparent;
    top: 100%;
    left:10px;
}
.tooltip-pad-white.tooltip-pad-left-up:before{
    border-width: 0 5.195px 9px 5.195px;
    border-color: transparent transparent var(--white) transparent;
    bottom: 100%;
    left:10px;
}
</style>
