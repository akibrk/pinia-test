<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { useAppStore } from '@/store';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  setup() {
    const appStore = useAppStore();
    const router = useRouter();

    onBeforeMount(async () => {
      await appStore.getTodo('1');
      const activeTodo = appStore.$state.activeTodo;
      console.log({ ...activeTodo });
      // Makes some routing decisions
      await router.push({ name: 'todo' });
    });
  },
});
</script>
