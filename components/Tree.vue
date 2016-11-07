<template>
	<div class="enp-editor_sidebar">
               123
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

