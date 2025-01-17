<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Social Stat</RouterLink>
      <RouterLink to="/product">Product</RouterLink>
    </nav>
  </header>

  <RouterView />

  <footer></footer>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>