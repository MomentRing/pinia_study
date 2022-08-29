import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      num: 0,
    };
  },
  actions: {
    add() {
      this.num++;
    },
  },
});
