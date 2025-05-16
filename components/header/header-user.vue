<script setup lang="ts">
import {userEditStore} from "~/store/user-edit.store";

const editUser = userEditStore()
</script>

<template>
<button @click="editUser.drawerShow = true" class="flex items-center ml-auto focus:outline-[2px] focus:outline-primary focus:bg-light-grey">
    <img class="lg:w-16 lg:h-16 w-8 h-8 rounded-full border-[3px] border-white shadow-xl" src="https://www.pnrao.com/wp-content/uploads/2023/06/dummy-user-male.jpg" alt="test-user" />
    <span class="font-bold ml-4">John Doe</span>
    <Icon class="ml-4" name="mdi:chevron-right" />
</button>
</template>