import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ClassSchedule from './ClassSchedule'

export default function Routes () {
  return (
    <Router>
      <div>
        <Route path="/" exact={true} component={ClassSchedule} />
      </div>
    </Router>
  )
}