<script setup lang="ts">

import UserEditForm from "~/components/user-drawer/user-edit-form.vue";
import {userEditStore} from "~/store/user-edit.store";

const drawerElem = ref<HTMLElement | null>(null);
const editStore = userEditStore()

onClickOutside(drawerElem, () => {
  editStore.drawerShow = false
})
</script>

<template>
<div
    ref="drawerElem"
    class="fixed top-0 bg-secondary lg:w-[50vw] z-10 w-full h-screen transition-all duration-350 overflow-y-auto"
    :class="[editStore.drawerShow ? 'right-0' : 'right-[-100vw]']"
>
  <UserEditForm />
</div>
</template>

<style scoped>

</style>