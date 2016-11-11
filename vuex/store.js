import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    workspace: {
    	scene: {
    		mode: "editor", //css, js, html source
    		size: [600, 300]
    	},
    	tree: {},
    	toolbar: {}
    },
    scene: {
      
    }
  },
  mutations: {
  	increment: state => state.count++,
    decrement: state => state.count--,
    changeMode: function(state, mode){
      store.state.workspace.scene.mode = mode
    } 
  },
  getters: {
    getScene: function(){
      var someDOMElement = document.getElementById('app');
      var jsonOutput = domJSON.toJSON(someDOMElement);
      return jsonOutput;
    },
    getMode: function(){
      return store.state.workspace.scene.mode
    }
  },
  actions: {
  	increment ({ commit }) { 
    	commit('increment')
  	},
  	decrement ({ commit }) {
    	commit('decrement')
  	},
    changeMode({ commit }, mode) {
      commit('changeMode', mode )
    },
  }
})


export default store;