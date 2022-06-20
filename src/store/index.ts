import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({
    todos: [],
    activeTodo: undefined as any,
  }),
  getters: {},
  actions: {
    async getTodos() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos/'
        ).then((res) => res.json());
        this.$state.todos = response;
      } catch (error) {
        console.log(error);
      }
    },

    async getTodo(id: string) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        ).then((res) => res.json());
        this.$state.activeTodo = response;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
