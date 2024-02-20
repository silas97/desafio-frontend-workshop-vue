<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Desafio Fast</h1>

      <div class="flex gap-5 mt-4">
        <div>
          <label for="Colaborador" class="block text-sm text-gray-500 dark:text-gray-300">Colaborador</label>

          <input type="text" placeholder="Filtrar por Colaborador" v-model="pesquisaColaborador"
            class="block  mt-2 w-52 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
        </div>
        <div>
          <label for="Workshop" class="block text-sm text-gray-500 dark:text-gray-300">Workshop</label>

          <input type="text" placeholder="Filtrar por Workshop" v-model="pesquisaWorkshop"
            class="block  mt-2 w-52 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
        </div>
        <div>
          <label for="Data" class="block text-sm text-gray-500 dark:text-gray-300">Data</label>

          <input type="date" placeholder="Filtrar por Data do Workshop" v-model="pesquisaData"
            class="block  mt-2 w-52 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
        </div>
      </div>

      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="ata in filtros" :key="ata.id">
          <router-link :to="{ name: 'detalhes-workshop', params: { id: ata.id } }">
            <div class="space-y-3">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">{{ ata.workshop.nome }}</h1>

              <p class="text-gray-500 dark:text-gray-300">
                Data: {{ formatarData(ata.workshop.dataRealizacao) }}
                <br>
                Descrição: {{ ata.workshop.descricao }}
              </p>

              <a href="#"
                class="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <span class="mx-1">Mais Informações</span>
                <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { formatarData } from '@/utils/util'

import AtasService from '@/services/AtasService'

const pesquisaColaborador = ref('')
const pesquisaWorkshop = ref('')
const pesquisaData = ref('')

const atas = ref([]);

onMounted(() => {
  atas.value = AtasService.getAllAtas();
});

const filtrarWorkshopNome = (ata) => ata.workshop.nome.toLowerCase().includes(pesquisaWorkshop.value.toLowerCase())

const filtrarWorkshopData = (ata) => ata.workshop.dataRealizacao.includes(pesquisaData.value)

const filtrarColaboradores = (ata) => ata.colaboradores.some((colaborador) =>
  colaborador.nome.toLowerCase().includes(pesquisaColaborador.value.toLowerCase())
)

const filtros = computed(() => {
  return atas.value.filter(
    (ata) =>
      filtrarWorkshopNome(ata) &&
      filtrarWorkshopData(ata) &&
      filtrarColaboradores(ata)
  )
})

</script>
