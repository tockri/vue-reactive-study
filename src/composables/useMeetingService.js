import { MeetingService } from '../services/MeetingService.js'

export function useMeetingService() {
  const meetingService = new MeetingService()
  
  return {
    meetingService
  }
}