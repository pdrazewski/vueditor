<!-- mutate global store object: workspace view modes -->

<template>
   <div class="enp-editor_actionbar"> 
	    <ul style="width: auto">
	        <li class="is-active"><a  id="js-togglePreview" @click="changeMode('editor')">Editor</a></li>
	        <li><a  id="js-toggleHtmlView"  @click="changeMode('html')">HTML</a></li>
	        <li><a  id="js-toggleHCSSView"  @click="changeMode('css')">CSS</a></li>
	        <li><a  id="js-toggleJsView" @click="changeMode('js')">JS</a></li>
	        <li><a  id="js-toggleDebugView" @click="changeMode('debug')">Debug</a></li>
	    </ul>
	</div>
</template>

<script>
import store from '../vuex/store'

module.exports = {
	store,
	methods: {
		changeMode (mode) {
			this.$store.dispatch('changeMode', mode)
		}
  }
}
</script>

