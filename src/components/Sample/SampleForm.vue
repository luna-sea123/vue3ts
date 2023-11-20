<script setup lang="ts">
import { ref, onMounted, watch, inject } from 'vue'

const title = ref<string>('')
const task = ref<string>('')
const address = ref<string>('')
const start = ref<Date | null>(null)
const end = ref<Date | null>(null)
//main.tsでprovideしたdayjsをinjectしてくる
const dayjs = inject('dayjs') as typeof import('dayjs')

//disabled判定用
const now = ref(new Date())
const errList = ref<number>(0)
const disabled = ref<boolean>()

type schedules = {
  id: number
  title: string
  task: string
  address: string
  start: Date | null
  end: Date | null
}

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
      address: address.value,
      start: start.value,
      end: end.value
    }
    emit('resistNewTask:datas', newSchedule)
    console.log(newSchedule)
    console.log(dayjs(now.value).isSameOrAfter(start.value))
    title.value = ''
    task.value = ''
    address.value = ''
    ;(start.value = null), (end.value = null)
  }
}

const judgeDisabled = () => {
  notBlunk()
  dateCheck()
  if (errList.value === 0) {
    disabled.value = false
  } else {
    disabled.value = true
  }
  console.log(errList.value)
  errList.value = 0
}

const notBlunk = () => {
  if (title.value === '' || task.value === '' || address.value === '') {
    errList.value += 1
  }
}

const dateCheck = () => {
  //現在時間と比較
  if (
    dayjs(now.value).isSameOrAfter(start.value) !== false ||
    dayjs(now.value).isSameOrAfter(end.value) !== false
  ) {
    console.log("isSameOrAfter")
    errList.value += 1
  }
  if (dayjs(end.value).isSameOrBefore(start.value) !== false) {
    console.log("isSameOrBefore")
    errList.value += 1
  }
  if (start.value === null || end.value === null) {
    console.log("notNull")
    errList.value += 1
  }
}

onMounted(() => {
  errList.value = 0
  notBlunk()
  dateCheck()
  judgeDisabled()
})

//watch複数指定書式
watch([title, task, address, start, end], () => {
  notBlunk()
  dateCheck()
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
        <span class="p-float-label">
          <Calendar id="calendar-24h" v-model="start" showTime hourFormat="24" />
          <label for="start">start</label>
        </span>
      </div>
      <div>
        <span class="p-float-label">
          <Calendar id="calendar-24h" v-model="end" showTime hourFormat="24" />
          <label for="end">end</label>
        </span>
      </div>
      <Button
        :disabled="disabled"
        @click="saveOnClick"
        label="save"
        icon="pi pi-check"
        iconPos="right"
      />
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
