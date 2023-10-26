<script setup lang="ts">
// import Nav from '../components/Nav.vue'
import TaskForm from '../components/TaskForm.vue'
import { ref, onMounted } from 'vue'
// import { ProductService } from '@/service/ProductService'

let date = new Date()
// let formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

// const getFormattedDate = () => {
//   let today = new Date()
//   alert(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)
//   return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
// }

const id = ref<number>()
const title = ref<string>('')
const task = ref<string>('')
const address = ref<string>('')
// let date = ref(new Date())
let startTime = ref(new Date())
let endTime = ref(new Date())

const schedules = ref([id, title, task, address, startTime, endTime])

// onMounted(() => {
//   ProductService.getProductsMini().then((data) => (schedules.value = data))
// })
</script>

<template>
  <div v-if="schedules === null">
    <DataTable :value="schedules" tableStyle="min-width: 50rem">
      <Column field="id" header="id"></Column>
      <Column field="title" header="title"></Column>
      <Column field="task" header="task"></Column>
      <Column field="address" header="address"></Column>
    </DataTable>
  </div>
  <div v-else>
    <h3>no schedules</h3>
  </div>
  <!-- <div>
    <Calendar v-model="date" inline showWeek />
  </div> -->
  <TaskForm />
</template>

<style scoped>
button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
