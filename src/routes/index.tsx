import * as React from 'react'

import { Route, BrowserRouter as Router } from 'react-router-dom'

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