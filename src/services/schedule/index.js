import axios from 'axios'
import * as moment from 'moment'

export default class ScheduleService {
  static async getScheduleData() {
    return axios.get('http://localhost:3333/event/')
  }
}
