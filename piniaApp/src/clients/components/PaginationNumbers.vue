<script setup lang="ts">
import { ref, toRef, watch } from 'vue';

interface Props {

  totalPage: number;
  currentPage: number;
}

interface Emits {

  (e: 'pageChanged', page: number): void;
}

const props = defineProps<Props>();

const emits = defineEmits<Emits>();

const totalPage = toRef(props, 'totalPage');
const currentPage = toRef(props, 'currentPage');

const totalPageNumbers = ref<number[]>([]);

watch( totalPage, () => {
  totalPageNumbers.value = [ ...new Array(totalPage.value)].map((v, i) => i + 1);
}, { immediate: true });

</script>

<template>

    <button :disabled="currentPage === 1" @click="emits('pageChanged', currentPage - 1)">Anterior</button>

    <button v-for="number of totalPageNumbers" :key="number" @click="emits('pageChanged', number)" :class="{ active: currentPage === number }">
      {{ number }}
    </button>

    <button :disabled="currentPage === totalPage" @click="emits('pageChanged', currentPage + 1)">Siguiente</button>

</template>

<style scoped>

</style>