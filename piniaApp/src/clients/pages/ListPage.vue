<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue';
import PaginationNumbers from '@/clients/components/PaginationNumbers.vue';
import useClients from '@/clients/composables/useClients';
import LoadingModal from '@/shared/components/LoadingModal.vue';

const { isLoading, clients, currentPage, totalPage, getPage } = useClients();

</script>

<template>

    <h1>Listado de clientes</h1>

    <ClientList :clients="clients"/>

    <PaginationNumbers
      :current-page="currentPage"
      :total-page="totalPage"
      @page-changed="getPage" />

    <!--<h1 v-if="isLoading"> Loading... </h1>-->

    <LoadingModal v-if="isLoading"/>

</template>

<style scoped>

</style>