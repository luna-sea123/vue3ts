<template>
  <SampleCollection :datas="datas" />
  <SampleForm @on-resist-new-task="resistNewTask" />
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import SampleCollection from '@/components/Sample/SampleCollection.vue'
import SampleForm from '@/components/Sample/SampleForm.vue'

// const id = ref<number>()
// const title = ref<string>('')
// const task = ref<string>('')
// const address = ref<string>('')
// let date = new Date()
// let startTime = date.toLocaleTimeString()
// let endTime = date.toLocaleTimeString()

// const datas = ref([id, title, task, address, startTime, endTime])

type schedules = { id: number; title: string; task: string; address: string }
const datas_init: schedules[] = [
  { id: 1, title: 'title1', task: 'task1', address: 'TOKYO' },
  { id: 2, title: 'title2', task: 'task2', address: 'TOKYO' }
]

// const datas = ref(datas_init)

const datas = ref<schedules[]>([{} as schedules])

const resistNewTask = (newSchedule: schedules) => {
  console.log(newSchedule)
  newSchedule.id = datas.length + 1
  datas.value.push(newSchedule)
}

onMounted(() => {
  datas.value = datas_init
  console.log(datas)
  // _init()
})

watch(datas, () => {
  console.log(datas)
})
</script>
