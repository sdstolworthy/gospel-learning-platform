import * as React from 'react'
import Calendar from './components/Calendar'
import DefaultLayout from '../../layouts/DefaultLayout'
import HomeMenu from './components/Menu'
import { Box } from 'bloomer/lib/elements/Box'
import { Column } from 'bloomer/lib/grid/Column'
import { Columns } from 'bloomer/lib/grid/Columns'
import { Container } from 'bloomer/lib/layout/Container'

export default class ClassSchedule extends React.Component<{}> {
  public render() {
    return (
      <DefaultLayout>
        <Columns style={{ margin: '2rem' }}>
          <Column isSize={2}>
            <HomeMenu />
          </Column>
          <Column>
            <Container>
              <Box>
                Hello, World!
                <Calendar />
              </Box>
            </Container>
          </Column>
        </Columns>
      </DefaultLayout>
    )
  }
}
