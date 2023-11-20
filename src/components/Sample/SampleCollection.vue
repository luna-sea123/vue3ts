<template>
  <div class="container">
    <h4>CollectionDataTable</h4>
    <div v-if="datas !== null">
      <DataTable :value="datas" tableStyle="min-width: 50rem">
        <Column field="id" header="id"> </Column>
        <Column field="title" header="title"> </Column>
        <Column field="task" header="task"> </Column>
        <Column field="address" header="address"> </Column>
        <Column field="start" header="start" :body="formatDate"></Column>
        <Column field="end" header="end" :body="formatDate"></Column>
      </DataTable>
    </div>
    <div v-else>
      <h3>no schedules</h3>
    </div>
  </div>
  <!-- <pre>{{ datas }}</pre> -->
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'

type schedules = { id: number; title: string; task: string; address: string; start: Date | null; end: Date | null }

const formatDate = (rowData: schedules) => {
  const start = rowData.start ? new Date(rowData.start) : null;
  const end = rowData.end ? new Date(rowData.end) : null;
  const startFormatted = start ? start.toLocaleDateString('ja-JP') : '';
  const endFormatted = end ? end.toLocaleDateString('ja-JP') : '';
  return `${startFormatted} - ${endFormatted}`;
}

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
watch(
  () => props.datas,
  () => {
    console.log(props.datas)
  }
)
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
