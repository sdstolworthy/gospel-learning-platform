import * as React from 'react'
import Calendar from './components/Calendar'
import DefaultLayout from '../../layouts/DefaultLayout'
import HomeMenu from './components/Menu'
import { Box } from 'bloomer/lib/elements/Box'
import { Button } from 'bloomer/lib/elements/Button'
import { Column } from 'bloomer/lib/grid/Column'
import { Columns } from 'bloomer/lib/grid/Columns'
import { Container } from 'bloomer/lib/layout/Container'
import { Icon } from 'bloomer/lib/elements/Icon'

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
                <Columns>
                  <Column>
                    <Button className="is-primary is-pulled-right">
                      <Icon className="fa fa-plus" />&nbsp;Add Class Session
                    </Button>
                  </Column>
                </Columns>
                <Calendar />
              </Box>
            </Container>
          </Column>
        </Columns>
      </DefaultLayout>
    )
  }
}
