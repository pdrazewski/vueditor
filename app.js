// main.js

import Vue from 'vue';
import store from './vuex/store';
import Counter from './components/Counter.vue';
import Modes from './components/Modes.vue';
import Ruler from './components/Ruler.vue';
import Scene from './components/Scene.vue';
import Tree from './components/Tree.vue';

const app = new Vue({
  el: '#app',
  store, 
  components: { 
    Counter, 
    Modes,
    Scene,
    Ruler,
    Tree 
  },
  template: `
    <div class="enp-editor_wrapper">
        <div class="enp-editor_scene">
            <div class="app">
              <ruler></ruler>
              <scene></scene>
              <tree></tree>
              <counter></counter>
              <modes></modes>
            </div>
        </div>
    </div>
  `
})
