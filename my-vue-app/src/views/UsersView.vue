<script setup lang="ts">
import { ref } from 'vue'

const todosUsers = ref([
    {
        userId: 101,
        userName: "Alice",
        todos: [
            {
                todoId: 1,
                title: "Making notes for the presentation"
            },
            {
                todoId: 2,
                title: "Buying Groceries"
            }]
    }
    ,
    {
        userId: 102,
        userName: "Stuart",
        todos: [
            {
                todoId: 1,
                title: "Choping vegetables for dinner"
            },
            {
                todoId: 2,
                title: "Watering the plants"
            },
            {
                todoId: 3,
                title: "Taking  a walk with the dog"
            }]
    }

])

</script>

<template>
    <h1>Users List</h1>
    <h2>Route-Params :{{$route.params}}</h2>
        <!-- 1.Diplay Each user by user name and Id only   -->
         <!-- 2. Upon Clicking on Each user it will display his todos -->

         <ul>
            <li v-for="user in todosUsers" :key="user.userId">
                 <strong>{{user.userId}}</strong>
                 <RouterLink :to="'/user/'+user.userId">{{ user. userName}}</RouterLink>
            </li>
         </ul>
         <RouterView/> <!--This is the User's Router View -->
         

</template>