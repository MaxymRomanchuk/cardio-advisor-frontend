<script setup lang="ts">
    const homeRoute = '/';

    const navButtons = reactive([
        {
            name: 'Пройти тест',
            url: '/test'
        },
    ])


</script>

<template>
    <nav class="navbar header-bg sticky-top">
        <div class="container">
            <NuxtLink class="navbar-brand nav-text" :to="homeRoute">Головна сторінка</NuxtLink>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item my-auto" v-for="i in navButtons">
                    <NuxtLink class="nav-link nav-text" :to="i.url">{{ i.name }}</NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>
.navbar {
  background-color: #304b4e;
}

.nav-text {
  color: white;
  font-weight: 700;
}

.nav-text:hover {
  color: rgb(212, 212, 212);
}
</style>