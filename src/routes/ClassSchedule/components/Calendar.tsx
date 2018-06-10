import * as moment from 'moment'
import * as React from 'react'
import BigCalendar from 'react-big-calendar'
import ScheduleService from '../../../services/schedule'

const events = ScheduleService.getScheduleData()
BigCalendar.momentLocalizer(moment)
const Basic = () => (
  <BigCalendar
    events={events}
    step={60}
    defaultView="agenda"
    showMultiDayTimes={true}
    defaultDate={new Date}
  />
)

export default Basic