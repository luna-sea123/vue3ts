<script setup lang="ts">
import InputText from 'primevue/inputtext'
import { ref, onMounted, watch } from 'vue'

const title = ref<string>('')
const task = ref<string>('')
const address = ref<string>('')
//disabled判定用
const disabled = ref<boolean>()

type schedules = { id: number; title: string; task: string; address: string }

interface Emits {
  (event: 'resistNewTask:datas', newSchedule: schedules): void
}

const emit = defineEmits<Emits>()

const saveOnClick = (): void => {
  if (confirm('登録しますか？')) {
    const newSchedule: schedules = {
      id: 0,
      title: title.value,
      task: task.value,
      address: address.value
    }
    emit('resistNewTask:datas', newSchedule)
    console.log(newSchedule)
    title.value = ''
    task.value = ''
    address.value = ''
  }
}

const judgeDisabled = () => {
  if (title.value === '' || task.value === '' || address.value === '') {
    disabled.value = true
  } else {
    disabled.value = false
  }
}

onMounted(() => {
  judgeDisabled()
})

//watch複数指定書式
watch([title, task, address], () => {
  judgeDisabled()
})
</script>

<template>
  <div class="cantainer">
    <form>
      <span class="p-float-label">
        <InputText type="text" v-model="title" id="title" name="title" />
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
        <Button
          :disabled="disabled"
          @click="saveOnClick"
          label="save"
          icon="pi pi-check"
          iconPos="right"
        />
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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
