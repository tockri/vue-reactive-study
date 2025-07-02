export class MeetingService {
  constructor() {
    this.baseTime = new Date()
  }

  async fetchMeetings() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const meetings = [
          {
            id: 1,
            subject: "朝会",
            startTime: new Date(this.baseTime.getTime() - 60 * 1000)
          },
          {
            id: 2,
            subject: "プロジェクト会議",
            startTime: new Date(this.baseTime.getTime())
          },
          {
            id: 3,
            subject: "振り返り会議",
            startTime: new Date(this.baseTime.getTime() + 10 * 1000)
          },
          {
            id: 4,
            subject: "設計レビュー",
            startTime: new Date(this.baseTime.getTime() + 20 * 1000)
          },
          {
            id: 5,
            subject: "1on1",
            startTime: new Date(this.baseTime.getTime() + 30 * 1000)
          }
        ];
        resolve(meetings);
      }, 500);
    });
  }
}