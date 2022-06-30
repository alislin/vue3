<!--
 * @Author: Lin Ya
 * @Date: 2022-06-29 16:53:53
 * @LastEditors: Lin Ya
 * @LastEditTime: 2022-06-30 14:43:16
 * @Description: file content
-->
<script setup lang="ts">
import { ref } from 'vue'
import UserList from './UserList.vue'
const count = ref(0)
</script>
<template>
    <div>this is home</div>
    <UserList title="System" />
</template>