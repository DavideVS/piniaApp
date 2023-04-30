import { computed, ref, watch } from 'vue';
import type { Client } from "../interface/client";
import { useMutation, useQuery } from '@tanstack/vue-query';
import clientsApi from '@/api/clients-api';

const getClient = async ( id: number ): Promise<Client> => {
    const { data } = await clientsApi.get(`/clients/${ id }`);
    return data;
}

const updateClient = async(client: Client): Promise<Client> => {
    /*
    await new Promise ( resolve  => {
        setTimeout( () => resolve(true), 2000)
    });
    */
    const {data} = await clientsApi.patch<Client>(`/clients/${ client.id }`, client);
    return data;
}

const useClient = ( id:number ) => {

    const client = ref<Client>();

    const { isLoading, data, isError } = useQuery(

        ['client', id],
        () => getClient(id),
        {
            retry: false
        }
    );

    const clientMutation = useMutation(updateClient);

    watch( data, () => {

        if (data.value)
        client.value = { ...data.value };
    }, { immediate: true })

    return {
        isLoading,
        client,
        isError,
        clientMutation,
        updateClient: clientMutation.mutate,
        isUpdating: computed(() => clientMutation.isLoading.value),
        isUpdatingSuccess: computed( () => clientMutation.isSuccess.value) 
    }
}

export default useClient;