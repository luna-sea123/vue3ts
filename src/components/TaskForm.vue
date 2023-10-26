<script setup lang="ts">
import { type DirectiveBinding, ref } from 'vue'

const title = ref<string>('')
const task = ref<string>('')
const address = ref<string>('')

let date = new Date()
let startTime = date.toLocaleTimeString()
let endTime = date.toLocaleTimeString()

//v-focus 付与されたフォームに対してフォーカスを自動で当てる
const vFocus = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    el.focus()

    //v-focus.alertモディファイア
    if (binding.modifiers.alert) {
      el.style.backgroundColor = 'pink'
    }
  }
}

const onSubmit = () => {
  if (confirm('登録しますか？')) {
    console.log(startTime + '  ~  ' + endTime)
    //emit("", );
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
      <span
        >開始日時
        <Calendar id="calendar-24h" v-model="startTime" showTime hourFormat="24" />
      </span>
    </div>
    <div>
      <span
        >終了日時
        <Calendar id="calendar-24h" v-model="endTime" showTime hourFormat="24" />
      </span>
    </div>
    <div>
      <Button @click="onSubmit" label="save" icon="pi pi-check" iconPos="right" />
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
