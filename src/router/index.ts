/*
 * @Author: Lin Ya
 * @Date: 2022-06-29 14:58:26
 * @LastEditors: Lin Ya
 * @LastEditTime: 2022-06-30 14:45:15
 * @Description: file content
 */
import Home from '../views/Home.vue'
import HelloWorld from '../views/HelloWorld.vue';
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    { path: '/', component: Home },
    { path: '/hello', component: HelloWorld },
  ]
export const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })