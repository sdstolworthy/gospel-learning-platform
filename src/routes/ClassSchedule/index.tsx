import * as React from 'react'
import AddClassScheduleForm from './components/AddClassScheduleForm'
import Calendar from './components/Calendar'
import CardModal, { IButton } from '../../components/Modal'
import DefaultLayout from '../../layouts/DefaultLayout'
import HomeMenu from './components/Menu'
import { Box } from 'bloomer/lib/elements/Box'
import { Button } from 'bloomer/lib/elements/Button'
import { Column } from 'bloomer/lib/grid/Column'
import { Columns } from 'bloomer/lib/grid/Columns'
import { Container } from 'bloomer/lib/layout/Container'
import { Icon } from 'bloomer/lib/elements/Icon'
interface IState {
  dateField: string
  modalVisible: boolean
  linkField: string
  titleField: string
}

export default class ClassSchedule extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      dateField: '',
      linkField: '',
      modalVisible: true,
      titleField: '',
    }
  }
  public handleCloseModal = () => {
    this.setState({
      modalVisible: false,
    })
  }
  public handleOpenModal = () => {
    this.setState({
      modalVisible: true,
    })
  }
  public handleInputChange = (name: string, value: string) => {
    console.log(name, value)
    this.setState(prevState => {
      prevState[name] = value
      return prevState
    })
  }
  public render() {
    const buttons: IButton[] = [
      {
        action: this.handleCloseModal,
        color: 'outline',
        title: 'Cancel',
      },
    ]
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
                    <Button
                      className="is-primary is-pulled-right"
                      onClick={this.handleOpenModal}
                    >
                      <Icon className="fa fa-plus" />&nbsp;Add Class Session
                    </Button>
                  </Column>
                </Columns>
                <Calendar />
              </Box>
            </Container>
          </Column>
        </Columns>
        <CardModal
          buttons={buttons}
          title="Add a Class"
          onRequestClose={this.handleCloseModal}
          isVisible={this.state.modalVisible}
        >
          <AddClassScheduleForm onChangeInput={this.handleInputChange} />
        </CardModal>
      </DefaultLayout>
    )
  }
}
