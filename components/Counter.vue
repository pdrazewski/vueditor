<template>
  <div>{{ count }}</div> 
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

