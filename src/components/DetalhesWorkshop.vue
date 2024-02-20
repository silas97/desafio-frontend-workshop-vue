<template>
    <div v-if="ata" class="flex items-center justify-center h-screen">
        <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-800 dark:text-gray-400">Detalhes do Workshop</span>
                <span
                    class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">{{
                        formatarData(ata.workshop.dataRealizacao) }}</span>
            </div>

            <div>
                <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{{ ata.workshop.nome }}</h1>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">{{ ata.workshop.descricao }}</p>
            </div>

            <div>
                <div class="mt-2 text-gray-700 dark:text-gray-200">
                    <span class="mr-2">Colaboradores:</span>
                    <ul class="list-disc pl-5">
                        <li v-for="colaborador in ata.colaboradores" :key="colaborador.id"
                            class="mb-1 ml-1 text-blue-600 hover:underline dark:text-blue-400">
                            {{ colaborador.nome }}
                        </li>
                    </ul>
                </div>

                <div class="flex items-center justify-center mt-4">
                    <router-link to="/"
                        class="flex items-center justify-center mr-2 text-gray-800 cursor-pointer dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                        tabindex="0" role="link" aria-label="twitter link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>
                        <span class="mx-1">Voltar</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <p v-else>Workshop não encontrado</p>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { formatarData } from '@/utils/util'

import AtasService from '@/services/AtasService';

const rota = useRoute();

const ata = ref(null);

onMounted(() => {
    ata.value = AtasService.getAtaById(rota.params.id);
});
</script>
  