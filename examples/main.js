import Vue from 'vue'
import App from './app'
import dragging from '../src/index.js'

Vue.use(dragging)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})