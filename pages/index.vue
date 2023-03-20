<script setup>
import { nameStore } from '@@/stores/NameStore'
const store = nameStore();
</script>

<template>
    <div class="home">
        <h2>First project <span>Nuxt3</span> <br/>
            by Andrey
        </h2>
        <input type="text" @keyup="store.addName($event.target.value)" placeholder="inserir nome">
        <h1>{{ store.name }}</h1>
    </div>
</template>

<style scoped>

.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

input {
    width: 300px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0 60px;
}

.home h1 {
    font-size: 30px;
}

.home h2 {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    font-weight: 500;
}

h2 span {
    color: #00dc82;
    font-weight: bold;
}
</style>