<script setup lang="ts">
import HeaderBar from "~/components/header/header-bar.vue";
import UserDrawer from "~/components/user-drawer/user-drawer.vue";
import UserCard from "~/components/user-card/user-card.vue";
import ApplicationBg from "~/components/other/application-bg.vue";
</script>
<template>
  <div class="font-inter p-8 relative">
    <HeaderBar></HeaderBar>
    <SearchBar />
    <UserDrawer />
    <UserCard :users="['test', 'test']"/>
    <ApplicationBg />
  </div>
</template>
