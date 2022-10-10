<script setup>
import { fetchAPI } from '/src/modules/utils';
import Auth from '/src/modules/auth';

const items = fetchAPI("GET", "/items")
</script>

<template>
    <h1>Items</h1>

    ようこそ {{Auth.user().id}} さん

    <a href="/create">投稿</a>
    <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Item Name</td>
                <td>Item Price</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item._id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
            </tr>
        </tbody>
    </table>
</template>