// main.js

import Vue from 'vue'
import store from './vuex/store'


const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      console.log(this.$store)
      return this.$store.state.count
    }
  }
} 
const app = new Vue({
  el: '#app',
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
      <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
    </div>
  `,
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
    	store.commit('decrement')
    }
  }
})
