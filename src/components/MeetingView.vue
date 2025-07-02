<template>
  <div style="border: 1px solid #ccc; padding: 10px; margin: 5px;">
    <div>{{ meeting.subject }}</div>
    <div>{{ formatStartTime(meeting.startTime) }}</div>
    <div>{{ getTimeStatus(meeting.startTime) }}</div>
  </div>
</template>

<script>
export default {
  name: 'MeetingView',
  props: {
    meeting: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatStartTime(startTime) {
      return startTime.toLocaleString()
    },
    getTimeStatus(startTime) {
      const now = new Date()
      return startTime <= now ? '（開始後）' : '（開始前）'
    }
  }
}
</script>