import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {

    const count = ref<number>(0);
    const lastChanged = ref<Date>();

    const incrementBy = ( value: number ) => {
        count.value += value;
        lastChanged.value = new Date();
    }

    const reset = () => {
        count.value = 0;
        lastChanged.value = new Date();
    }

    return {
        //state properties
        count,
        lastChanged,
        //propiedades computadas
        squareCount: computed(() => count.value + count.value),
        //actions
        incrementBy,
        increment: () => incrementBy(1),
        reset
    }

});