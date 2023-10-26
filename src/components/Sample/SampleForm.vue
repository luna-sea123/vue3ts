<script setup lang="ts">
import InputText from 'primevue/inputtext'
import { ref } from 'vue'

const id = ref<number>()
const title = ref<string>('')
const task = ref<string>('')
const address = ref<string>('')

type schedules = { id: number; title: string; task: string; address: string }

// type schedules = { title: string; task: string; address: string }

// interface Props {
//   datas: Array<schedules>
// }

interface Emits {
  (event: 'resistNewTask', newSchedule: schedules): void
}

// const props = defineProps<Props>()
const emits = defineEmits<Emits>()

// const saveOnClick = () => {
//   if (confirm('登録しますか？')) {
//     let newSchedule = [id, title.value, task.value, address.value]
//     emits('resistNewTask', newSchedule)
//     console.log(newSchedule)
//     title.value = ''
//     task.value = ''
//     address.value = ''
//     return newSchedule
//   }
// }

const saveOnClick = () => {
  if (confirm('登録しますか？')) {
    const newSchedule: schedules[] = [title.value, task.value, address.value]
    emits('resistNewTask', newSchedule)
    console.log(newSchedule)
    title.value = ''
    task.value = ''
    address.value = ''
    return newSchedule
  }
}
</script>

<template>
  <form>
    <span class="p-float-label">
      <InputText type="text" v-model="title" id="title" name="title" v-focus.alert />
      <label for="title">title</label>
    </span>
    <span class="p-float-label">
      <textarea v-model="task" id="task" name="task" rows="5" cols="30" />
      <label for="task">task</label>
    </span>
    <span class="p-float-label">
      <textarea v-model="address" id="address" name="address" rows="5" cols="30" />
      <label for="address">address</label>
    </span>
    <div>
      <Button @click="saveOnClick" label="save" icon="pi pi-check" iconPos="right" />
    </div>
  </form>
</template>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

span {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}
</style>
