import * as React from 'react'
import { Control } from 'bloomer/lib/elements/Form/Control'
import { Field } from 'bloomer/lib/elements/Form/Field/Field'
import { Input } from 'bloomer/lib/elements/Form/Input'
import { Label } from 'bloomer/lib/elements/Form/Label'

interface IProps {
  onChangeInput: (name: string, value: string) => void
}

export default function AddClassScheduleForm ({onChangeInput}: IProps) {
  const handleChangeInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onChangeInput(target.name, target.value)
  }
  return (
    <React.Fragment>
      <Field>
        <Label>Date</Label>
        <Control>
          <Input name="dateField" onChange={handleChangeInput}/>
        </Control>
      </Field>
    </React.Fragment>
  )
}