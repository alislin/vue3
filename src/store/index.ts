import { createLogger } from 'vuex'
import { createStore } from 'vuex'
import { modules } from './modules'
import { RootState } from './RootState'

export default createStore<RootState>({
  state: {
    id:"",
    name:"",
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules,
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})
