<script setup lang="ts">

import UserEditForm from "~/components/user-drawer/user-edit-form.vue";
import {userEditStore} from "~/store/user-edit.store";

const editStore = userEditStore()
</script>

<template>
<div
    class="fixed top-0 bg-secondary lg:w-[50vw] w-full h-screen transition-all duration-350 overflow-y-auto"
    :class="[editStore.drawerShow ? 'right-0' : 'right-[-100vw]']"
>
  <UserEditForm />
</div>
</template>

<style scoped>

</style>