<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { Button } from 'ant-design-vue';
import { useCountStore } from './stores/count/CountStore';
const countStore = useCountStore();
function storeCountAdd() {
  countStore.setCount(countStore.count + 1);
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h2>Vue3 + TypeScript + Vite + Router + Store + Mock + Scss</h2>
    <Button @click="storeCountAdd">Antd Button ++</Button>
    <h4>Store Count is : {{ countStore.getCount }}</h4>
  </div>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/hello/welcome">Hello</router-link>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 5px;
  }

  .router-link-exact-active {
    background-color: #9663d8;
    color: #fcfcfc;
  }
}
</style>
