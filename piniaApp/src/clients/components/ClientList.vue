<script setup lang="ts">
//import useClients from '@/clients/composables/useClients';
//const { clients } = useClients();

import type { Client } from '../interface/client';

//tarea
interface Props {
  clients: Client[];
}

const props = defineProps<Props>()

</script>

<template>
    <ul>
      <li v-for="client of props.clients" :key="client.id">
        <RouterLink :to="{ name: 'client-id', params: { id: client.id } }">
        {{ client.name }}
        </RouterLink>
      </li>
    </ul>
</template>

<style scoped>

</style>