import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import human from './human'
import app from './app'
import router from './router'
import { UpdateAuth } from '@freshservice/bridge'
/* eslint-disable no-new */

UpdateAuth.init().execute()
new Vue({
  el: '#app',
  store,
  router,
  human,
  render: h => h(app)
})
