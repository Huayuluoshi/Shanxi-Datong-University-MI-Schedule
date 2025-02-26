/**
 * 时间配置函数，此为入口函数，不要改动函数名
 */
async function scheduleTimer({
} = {}) {
  return {
    totalWeek: 16,
    startSemester: '',
    startWithSunday: false,
    showWeekend: false,
    forenoon: 5,
    afternoon: 4,
    night: 3,
    sections: [
      {
        section: 1,
        startTime: '08:00',
        endTime: '08:50',
      },
      {
        section: 2,
        startTime: '09:00',
        endTime: '09:50',
      },      {
        section: 3,
        startTime: '10:10',
        endTime: '11:00',
      },      {
        section: 4,
        startTime: '11:10',
        endTime: '12:00',
      },      {
        section: 5,
        startTime: '14:30',
        endTime: '15:20',
      },      {
        section: 6,
        startTime: '15:30',
        endTime: '16:20',
      },      {
        section: 7,
        startTime: '16:40',
        endTime: '17:30',
      },      {
        section: 8,
        startTime: '17:40',
        endTime: '18:30',
      },      {
        section: 9,
        startTime: '19:00',
        endTime: '19:50',
      },      {
        section: 10,
        startTime: '20:00',
        endTime: '20:50',
      },      {
        section: 11,
        startTime: '21:00',
        endTime: '21:50',
      },
    ],
  }

}