import Vue from 'vue'
import App from './App.vue'
import {store} from "./store/index"

// Importing the global css file
import "./assets/css/global.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
