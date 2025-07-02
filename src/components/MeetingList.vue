<template>
  <div>
    <div>現在時刻: {{ currentTime }}</div>
    <div>fetchMeetings呼び出し回数: {{ fetchCount }}</div>
    <MeetingView 
      v-for="meeting in meetings" 
      :key="meeting.id" 
      :meeting="meeting" 
    />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import MeetingView from './MeetingView.vue'
import { useMeetingService } from '../composables/useMeetingService.js'

export default {
  name: 'MeetingList',
  components: {
    MeetingView
  },
  setup() {
    const meetings = ref([])
    const currentTime = ref('')
    const fetchCount = ref(0)
    const { meetingService } = useMeetingService()
    let intervalId = null
    let timeIntervalId = null

    const updateCurrentTime = () => {
      currentTime.value = new Date().toLocaleString()
    }

    const fetchMeetings = async () => {
      try {
        const data = await meetingService.fetchMeetings()
        meetings.value = data
        fetchCount.value++
      } catch (error) {
        console.error('Failed to fetch meetings:', error)
      }
    }

    onMounted(() => {
      updateCurrentTime()
      fetchMeetings()
      intervalId = setInterval(fetchMeetings, 10000)
      timeIntervalId = setInterval(updateCurrentTime, 1000)
    })

    onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId)
      }
      if (timeIntervalId) {
        clearInterval(timeIntervalId)
      }
    })

    return {
      meetings,
      currentTime,
      fetchCount
    }
  }
}
</script>