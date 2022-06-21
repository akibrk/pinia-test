<template>
  <div class="item">
    {{ todoItem }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from 'vue';
import { useAppStore } from '@/store';

export default defineComponent({
  name: 'TodoView',
  setup() {
    const appStore = useAppStore();

    const todoItem = computed(() => appStore.$state.activeTodo);

    onBeforeMount(async () => {
      console.log('Store');

      console.log('TODO', { ...appStore.$state.activeTodo });

      console.log('End Store');

      await appStore.getTodos();
    });

    return {
      todoItem,
    };
  },
});
</script>
