<template>
  <Calendar :events="calendarEvents" inline showWeek />
</template>

<script setup lang="ts">
import type Calendar from 'primevue/calendar'
import { onMounted } from 'vue'

const calendarEvents = [
  {
    title: 'event1',
    start: '2023-10-10T10:00:00',
    end: '2023-10-10T12:30:00'
  }
]
</script>
