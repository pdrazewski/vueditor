<template>
	<div>
	   	<div id="js-enp-editor_header" class="enp-editor_header">
			<div class="enp-editor_ruler" id="js-ruler"></div>
		</div>
		<div id="js-breakpoints" style="position: relative"></div>
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

