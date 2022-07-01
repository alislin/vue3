import { Module } from 'vuex';
import { CountState, RootState } from '../RootState';

export const CountStore: Module<CountState, RootState> = {
  state: {
    count: 0,
  },
  getters: {
    getCount(state: CountState) {
      return state;
    }
  },
  mutations: {
    setCount(state: CountState, data: CountState) {
      state.count = data.count;
    }
  },
  actions: {},
  modules: {}
};

