// main.js

import Vue from 'vue'
import store from './vuex/store'
import Counter from './components/Counter.vue'
import Modes from './components/Modes.vue'

const app = new Vue({
  el: '#app',
  store,
  components: { Counter, Modes },
  template: `
    <div class="app">
      <counter></counter>
      <modes></modes>
      <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
    </div>
  `,
  methods: {
    increment () {
      store.dispatch('increment')
    },
    decrement () {
    	store.dispatch('decrement')
    }
  }
})
