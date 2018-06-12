import * as moment from 'moment'
import * as React from 'react'
import DatePicker from 'react-datepicker'
import { Control } from 'bloomer/lib/elements/Form/Control'
import { Field } from 'bloomer/lib/elements/Form/Field/Field'
import { Input } from 'bloomer/lib/elements/Form/Input'
import { Label } from 'bloomer/lib/elements/Form/Label'
import 'react-datepicker/dist/react-datepicker.css'

interface IProps {
  onChangeInput: (name: string, value: string) => void
}
interface IState {
  date: moment.Moment
}

export default class AddClassScheduleForm extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      date: moment()
    }
  }
  public handleChangeInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChangeInput(target.name, target.value)
  }
  public handleChangeDate = (value: moment.Moment) => {
    this.setState({ date: value })
    this.props.onChangeInput('dateField', value.toString())
  }
  public render() {
    return (
      <React.Fragment>
        <Field>
          <Label>Class Title</Label>
          <Control>
            <Input name="titleField" onChange={this.handleChangeInput} />
          </Control>
        </Field>
        <Field>
          <Label>Date</Label>
          <Control>
            <DatePicker onChange={this.handleChangeDate} value={this.state.date.toString()}/>
          </Control>
        </Field>
        <Field>
          <Label>Link to Lesson</Label>
          <Control>
            <Input name="linkField" onChange={this.handleChangeInput} />
          </Control>
        </Field>
      </React.Fragment>
    )
  }
}
