<script setup lang="ts">
import UsersView from './UsersView.vue';

</script>
<template>
    <h1>Todo App</h1>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

    <h1>Todos-<h4> Section for Displaying users</h4></h1>
    <UsersView/>

    <RouterView /><!--This is the App View -->

</template>