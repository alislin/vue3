import { defineStore } from 'pinia';

export const useCountStore = defineStore("count", {
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount: (state) => {
      return state.count;
    }
  },
  actions: {
    setCount(data: number) {
      this.count = data;
    }

  },
});

