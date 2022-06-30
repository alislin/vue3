<!--
 * @Author: Lin Ya
 * @Date: 2022-06-30 14:42:37
 * @LastEditors: Lin Ya
 * @LastEditTime: 2022-06-30 14:46:45
 * @Description: file content
-->
<!--
 * @Author: Lin Ya
 * @Date: 2022-06-30 09:19:10
 * @LastEditors: Lin Ya
 * @LastEditTime: 2022-06-30 14:44:39
 * @Description: file content
-->
<template>
    <h1>User list :{{ title }} ({{userList.length}})</h1>
    <template v-for="item in userList">
        <div>{{ item.id }} / {{ item.name }} / {{ item.year }}</div>
    </template>
</template>
<style lang="sass" scoped>

</style>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import UserApi, { User } from '../api/UserApi';

defineProps<{
    title: string,
}>();

onMounted(() => {
    load();
})

const userList =ref<User[]>([]);

async function load() {
    let dat = await UserApi.GetUserList()
    userList.value = dat;
}
</script>

