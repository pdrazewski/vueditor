<template>
	<div class="enp-editor_sceneContent" id="js-scene">
		<span class="enp-editor_sceneHandlerHorz" id="js-handlerHorizontal"></span>
		<span class="enp-editor_sceneHandlerVert" id="js-handlerVerical"></span>
		<span class="enp-editor_sceneSize" id="js-size"></span>
		<span class="enp-editor_sceneSave" id="js-saveScene">
			zapisz
		</span> 
		<div id="js-sceneContent" class="enp-editor_aceHolder">
				<h1 class="vcard-names">
			    <span class="vcard-fullname d-block" itemprop="name">pdrazewski</span>
			    <span class="vcard-username d-block" itemprop="additionalName">pdrazewski</span>
			  </h1>
		</div> 
		<code><pre>{{dom}}</pre></code>
	</div> 
</template>

<script>


							
module.exports = {
  computed: {
	dom () {
	  return this.$store.getters.getScene
	}
  }
}
</script>

