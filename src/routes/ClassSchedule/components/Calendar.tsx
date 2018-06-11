import * as moment from 'moment'
import * as React from 'react'
import BigCalendar from 'react-big-calendar'
import ScheduleService from '../../../services/schedule'

BigCalendar.momentLocalizer(moment)

interface ICalendarState {
  events: object[]
}
class CalendarView extends React.Component<{}, ICalendarState> {
  constructor(props: ICalendarState) {
    super(props)
    this.state = {
      events: [],
    }
  }
  public componentWillMount() {
    ScheduleService.getScheduleData().then(resp => {
      this.setState({ events: resp.data })
    })
  }
  public render() {
    return (
      <BigCalendar
        events={this.state.events}
        defaultView="agenda"
        showMultiDayTimes={true}
        defaultDate={new Date()}
        views={['agenda']}
        length={100}
      />
    )
  }
}

export default CalendarView
