<template>
  <div>
    <h1>Meeting</h1>
    <MeetingList />
  </div>
</template>

<script>
import MeetingList from '../components/MeetingList.vue'

export default {
  name: 'MeetingPage',
  components: {
    MeetingList
  }
}
</script>