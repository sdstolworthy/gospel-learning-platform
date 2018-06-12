import * as React from 'react'
import { Button } from 'bloomer/lib/elements/Button'
import { Delete } from 'bloomer/lib/elements/Delete'
import { Modal } from 'bloomer/lib/components/Modal/Modal'
import { ModalBackground } from 'bloomer/lib/components/Modal/ModalBackground'
import { ModalCard } from 'bloomer/lib/components/Modal/Card/ModalCard'
import { ModalCardBody } from 'bloomer/lib/components/Modal/Card/ModalCardBody'
import { ModalCardFooter } from 'bloomer/lib/components/Modal/Card/ModalCardFooter'
import { ModalCardHeader } from 'bloomer/lib/components/Modal/Card/ModalCardHeader'
import { ModalCardTitle } from 'bloomer/lib/components/Modal/Card/ModalCardTitle'

interface IProps {
  children: React.ReactNode
  isVisible: boolean
  title?: string
  onRequestClose: () => void
  buttons?: Array<{
    title: string,
    color?: string,
    action: () => void,
  }>
}

class CardModal extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }
  public render() {
    return (
      <Modal isActive={this.props.isVisible}>
        <ModalBackground />
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>{this.props.title}</ModalCardTitle>
            <Delete onClick={this.props.onRequestClose} />
          </ModalCardHeader>
          <ModalCardBody>{this.props.children}</ModalCardBody>
          <ModalCardFooter>
            {this.props.buttons && this.props.buttons.map(b => (
              <Button isColor={b.color || ''} onClick={b.action}>{b.title}</Button>
            ))}
          </ModalCardFooter>
        </ModalCard>
      </Modal>
    )
  }
}

export default CardModal
