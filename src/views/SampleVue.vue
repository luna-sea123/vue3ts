<template>
  <div class="container">
    <div class="sample">
      <SampleCollection :datas="datas" />
      <SampleForm @resistNewTask:datas="resistNewTask" />
    </div>
    <h3>sampleVue</h3>
    <div v-if="samples !== null">
      <DataTable :value="samples" tableStyle="min-width: 50rem" @row-click="deleteSample">
        <Column field="id" header="id"> </Column>
        <Column field="test" header="test"> </Column>
      </DataTable>
    </div>
    <div v-else>
      <h3>no schedules</h3>
    </div>
    <form>
      <span class="p-float-label">
        <InputText type="text" v-model="test" id="test" name="test" />
        <label for="title">title</label>
      </span>
      <div>
        <Button @click="testSave" label="save" icon="pi pi-check" iconPos="right" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import SampleCollection from '@/components/Sample/SampleCollection.vue'
import SampleForm from '@/components/Sample/SampleForm.vue'

const test = ref<string>('')
const samples = ref<{ id: number; test: string }[]>([
  { id: 0, test: 'hoge' },
  { id: 1, test: 'huga' }
])
const testSave = () => {
  if (confirm('登録しますか？')) {
    const sample: { id: number; test: string } = {
      id: samples.value.length,
      test: test.value
    }
    samples.value.push(sample)
    test.value = ''
  }
}
const deleteSample = (id: number) => {
  if (confirm('削除しますか？')) {
    samples.value = samples.value.filter((t) => t.id !== id)
  }
}

type schedules = { id: number; title: string; task: string; address: string; start: Date | null; end: Date | null }
const datas = ref<schedules[]>([
  { id: 1, title: 'title1', task: 'task1', address: 'TOKYO', start: new Date('2023-11-10T10:30:00'), end: new Date('2023-11-11T20:30:00') },
  { id: 2, title: 'title2', task: 'task2', address: 'TOKYO', start: new Date('2023-11-19T10:30:00'), end: new Date('2023-11-22T20:30:00') },
])

const resistNewTask = (newSchedule: schedules) => {
  console.log(newSchedule)
  //三項演算子
  //trueならdatasの最後の要素のidに＋１した数字を代入 : falseなら１を代入
  newSchedule.id = datas.value.length > 0 ? datas.value[datas.value.length - 1].id + 1 : 1
  datas.value.push(newSchedule)
}

onMounted(() => {
  console.log(datas.value)
})

watch(datas.value, () => {
  console.log(datas)
})
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sample {
}
</style>
