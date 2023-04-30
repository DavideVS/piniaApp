import type { Client } from '@/clients/interface/client';
import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useClientsStore = defineStore('clients', () => {

    const currentPage = ref<number>(1);
    const totalPage = ref<number>(5);
    const clients = ref<Client[]>([]);

    return {

        currentPage,
        totalPage,
        clients,

        setClients( newClient: Client[] ) {
            clients.value = newClient;
        },

        setPage( page: number ) {
            if ( currentPage.value === page ) return;
            if ( page <= 0 ) return;
            
            currentPage.value = page;
        }

    }
});