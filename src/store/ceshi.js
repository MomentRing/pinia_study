import { defineStore } from "pinia";
export const useCeshiStore = defineStore("ceshi", {
  state: () => {
    return {
      a: 100,
      list: [
        { id: 1, name: "吃饭", done: false },
        { id: 2, name: "睡觉", done: true },
        { id: 3, name: "打豆豆", done: false },
      ],
    };
  },
  getters: {
    a1(state) {
      return state.list.filter((item) => item.done === false).length;
    },
  },
  actions: {
    add() {
      window.setTimeout(() => {
        this.a++;
      }, 1000);
    },
  },
});
