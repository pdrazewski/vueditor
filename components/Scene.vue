<template>
	<div class="enp-editor_sceneContent" id="js-scene">
		<span class="enp-editor_sceneHandlerHorz" id="js-handlerHorizontal"></span>
		<span class="enp-editor_sceneHandlerVert" id="js-handlerVerical"></span>
		<span class="enp-editor_sceneSize" id="js-size"></span>
		<span class="enp-editor_sceneSave" id="js-saveScene">
			zapisz
		</span> 
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

