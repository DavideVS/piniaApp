<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconPinia from './shared/components/icons/IconPinia.vue'

</script>

<template>
  <div class="header">

    <IconPinia />

      <nav>
        <RouterLink to="/"> Contador </RouterLink>
        <RouterLink to="/clients"> Clientes </RouterLink>
      </nav>

  </div>

  <RouterView />
</template>

<style scoped>

</style>
