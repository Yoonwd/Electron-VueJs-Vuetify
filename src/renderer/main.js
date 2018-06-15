import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import Toasted from 'vue-toasted'
//Video Player
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
//End Video Player

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Toasted)
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)
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
