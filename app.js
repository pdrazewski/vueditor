// main.js

import Vue from 'vue'
import Vuex from 'vuex'
// import store from './vuex/store'

Vue.use(Vuex)

const store2 = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
  	increment: state => state.count++,
    decrement: state => state.count--
  }
})


const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      console.log(this.$store)
      return this.$store.state.count
    }
  }
} 
const app9 = new Vue({
  el: '#app-9',
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store: store2,
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
      store2.commit('increment')
    },
    decrement () {
    	store2.commit('decrement')
    }
  }
})
