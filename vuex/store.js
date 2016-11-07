import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    workspace: {
    	scene: {
    		mode: "computed", //css, js, html source
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
    decrement: state => state.count--
  },
  getters: {
    getScene: function(){
      var someDOMElement = document.getElementById('app');
      var jsonOutput = domJSON.toJSON(someDOMElement);
      return jsonOutput;
      
    }
  },
  actions: {
  	increment ({ commit }) {
    	commit('increment')
  	},
  	decrement ({ commit }) {
    	commit('decrement')
  	}
  }
})


export default store;