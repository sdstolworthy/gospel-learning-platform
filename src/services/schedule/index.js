import faker from 'faker'
import * as moment from 'moment'

export default class ScheduleService {
  static getScheduleData() {
    return Array(80)
      .fill(null)
      .map(() => {
        const date = faker.date.between(moment(), moment().add(3, 'month'))
        const dates = [moment(date).toDate(), moment(date).add(2, 'hour').toDate()]
        return {
          end: dates[1],
          start: dates[0],
          title: faker.name.title(),
        }
      })
  }
}
