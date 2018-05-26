// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from '@/router'
import store from '@/store'
import api from './utils/backend-api'
import appUtil from './utils/app-util'
import i18n from './locales'

Vue.use(Vuetify)
Vue.config.productionTip = false

window.Store = store
Vue.prototype.api = api
Vue.prototype.appUtil = appUtil

const lang = store.state.language
if (lang) {
  i18n.locale = lang
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
