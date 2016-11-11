<!-- mutate global store object: workspace view modes -->

<template>
   <div class="enp-editor_actionbar"> 
	    <ul style="width: auto; float: left">
	        <li :class="{ 'is-active': mode == 'editor' }"><a  id="js-togglePreview" @click="changeMode('editor')">Editor</a></li>
	        <li :class="{ 'is-active': mode == 'html' }"><a  id="js-toggleHtmlView"  @click="changeMode('html')">HTML</a></li>
	        <li :class="{ 'is-active': mode == 'css' }"><a  id="js-toggleHCSSView"  @click="changeMode('css')">CSS</a></li>
	        <li :class="{ 'is-active': mode == 'js' }"><a  id="js-toggleJsView" @click="changeMode('js')">JS</a></li>
	        <li :class="{ 'is-active': mode == 'debug' }"><a  id="js-toggleDebugView" @click="changeMode('debug')">Debug</a></li>
	        <li :class="{ 'is-active': mode == 'debug' }"><a  id="js-toggleDebugView" @click="changeMode('debug')">Tracking codes</a></li>
	    </ul>
	    <ul style="width: auto; float: right">
	        <li ><a>Layers</a></li>
	        <li ><a>Add +</a></li>
	        <li ><a>History</a></li>
	        <li ><a>Properties</a></li>
	        <li ><a>Save...</a></li>
	    </ul>
	</div>
</template>

<script>
import store from '../vuex/store'

module.exports = {
	store,
	computed: {
		mode () {
		  return this.$store.getters.getMode
		}
	  },
	methods: {
		changeMode (mode) {
			this.$store.dispatch('changeMode', mode)
		}
  }
}
</script>

