import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import Toasted from 'vue-toasted';

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Toasted)
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
// index.js or main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
