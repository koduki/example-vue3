<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { fetchAPI } from '/src/modules/utils';

const router = useRouter();

const item = ref({})

const onPost = () => {
    console.log(item.value);
    fetchAPI("POST", "/items", item, (res) => {
        router.push({ path: "/list" });
    });
}
</script>

<template>
    <h1>Add Item</h1>
    <div>
        <p>
            <label>Item Name:</label>
            <input type="text" v-model="item.name" />
        </p>
        <p>
            <label>Item Price:</label>
            <input type="text" v-model="item.price" />
        </p>
        <p>
            <button @click="onPost">Post</button>
        </p>
    </div>
</template>