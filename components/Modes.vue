<!-- mutate global store object: workspace view modes -->

<template>
   <div class="enp-editor_actionbar"> 
	    <ul>
	        <li class="is-active"><a href="#" id="js-togglePreview"><i class="icon-buffer"></i></a></li>
	        <li><a href="#" id="js-toggleHtmlView"><i class="icon-html5"></i></a></li>
	        <li><a href="#" id="js-toggleHCSSView"><i class="icon-css3"></i></a></li>
	        <li><a href="#" id="js-toggleJsView"><i class="icon-code"></i></a></li>
	    </ul>
	    <div id="js-scriptsGlobal"></div>
    	<div id="js-styleGlobal"></div>
    	<div id="js-sceneContent" class="enp-editor_aceHolder"></div> 
	</div>
</template>

<script>
module.exports = {
  computed: {
    count () {
      	console.log(this.$store)
      	return this.$store.state.count
    }
  }
}
</script>

