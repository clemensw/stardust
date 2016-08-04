import React, { Component } from 'react'
import { Message } from 'stardust'

export default class MessageDismissableBlockExample extends Component {
  state = { visible: true }

  dismiss = () => this.setState({ visible: false })
  reset = () => this.setState({ visible: true })

  handleDismiss = () => {
    this.dismiss()
    setTimeout(this.reset, 2000)
  }

  render() {
    return this.state.visible ? (
      <Message
        dismissable
        onDismiss={this.handleDismiss}
        header='Welcome back!'
        content='This is a special notification which you can dismiss.'
      />
    ) : (
      <p><i>The message will return in 2s<br /><br /></i></p>
    )
  }
}
