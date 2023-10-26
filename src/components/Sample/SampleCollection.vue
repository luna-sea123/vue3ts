<template>
  <div v-if="datas !== null">
    <DataTable :value="datas" tableStyle="min-width: 50rem">
      <Column field="id" header="id"> </Column>
      <Column field="title" header="title"> </Column>
      <Column field="task" header="task"> </Column>
      <Column field="address" header="address"> </Column>
    </DataTable>
  </div>
  <div v-else>
    <h3>no schedules</h3>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'

type schedules = { id: number; title: string; task: string; address: string }

interface Props {
  datas: schedules[]
}
const props = defineProps<Props>()

onMounted(() => {
  const Datas = computed(() => {
    console.log(props.datas)
    return props.datas
  })
})
</script>
