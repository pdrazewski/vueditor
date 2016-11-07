<template>
  <div>
	{{ count }}
	<p>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
	</p>
  </div> 
</template>

<script>

import store from '../vuex/store'

module.exports = {
	store,
  	methods: {
		increment () {
			this.$store.dispatch('increment')
		},
		decrement () {
			this.$store.dispatch('decrement')
		}
  	},
  	computed: {
		count () {
	  		return this.$store.state.count
		}
  	}
}
</script>

