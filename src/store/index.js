import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import createMutationsSharer from 'vuex-shared-mutations'
// import api from "@/utils/backend-api"
import user from './modules/user'
import products from './modules/products'
import orders from './modules/orders'
import customers from './modules/customers'
import i18n from '../locales'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    showHeader: true,
    language: 'ko',
    fab: false,
    hideSSN: true,
    step: null
  },
  getters: {
    getStep: state => () => state.step
  },
  actions: {
    setLoadingStatus(context, status) {
      context.commit('setLoading', status)
    },
    switchI18n({ commit }, lang) {
      commit('setI18n', lang)
    },
    updateSurveyStep({ commit }, step) {
      commit('setSurveyStep', step)
    }
  },
  mutations: {
    setLoading(state, status) {
      state.loading = status
    },
    setI18n(state, lang) {
      state.language = lang
      i18n.locale = lang
    },
    setSurveyStep(state, step) {
      state.step = step
    }
  },
  modules: {
    user,
    products,
    orders,
    customers
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    }),
    createMutationsSharer({
      predicate: ['user/setUser', 'user/setToken']
    })
  ]
})
