<template>
  <div class="item">
    {{ todoItem }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import { useAppStore } from '@/store';

export default defineComponent({
  name: 'TodoView',
  setup() {
    const appStore = useAppStore();
    const todoItem = ref(null);

    onBeforeMount(() => {
      console.log('Store');

      console.log('TODO', appStore.$state.activeTodo);

      console.log('End Store');
    });

    return {
      todoItem,
    };
  },
});
</script>
