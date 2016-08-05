import React from 'react'

import Message from 'src/collections/Message/Message'
import MessageContent from 'src/collections/Message/MessageContent'
import MessageHeader from 'src/collections/Message/MessageHeader'
import MessageList from 'src/collections/Message/MessageList'

import * as common from 'test/specs/commonTests'
import sandbox from 'test/utils/Sandbox-util'

describe('Message', () => {
  common.isConformant(Message)
  common.hasUIClassName(Message)
  common.rendersChildren(Message)
  common.hasSubComponents(Message, [MessageContent, MessageHeader, MessageList])

  describe('content', () => {
    it('does not exist by default', () => {
      shallow(<Message />)
        .should.not.have.descendants('MessageContent')
    })
    it('adds a MessageContent child when defined', () => {
      const wrapper = shallow(<Message content='Yo there' />)

      wrapper.should.have.descendants('MessageContent')

      wrapper
        .find('MessageContent')
        .shallow()
        .should.contain.text('Yo there')
    })

    it('wraps content value in a p tag', () => {
      const wrapper = shallow(<Message content='This is a paragraph' />)

      wrapper.should.have.descendants('p')

      wrapper
        .find('p')
        .shallow()
        .should.contain.text('This is a paragraph')
    })
  })

  describe('header', () => {
    it('does not exist by default', () => {
      shallow(<Message />)
        .should.not.have.descendants('MessageHeader')
    })
    it('adds a MessageHeader child when defined', () => {
      const wrapper = shallow(<Message header='Yo there' />)

      wrapper.should.have.descendants('MessageHeader')

      wrapper
        .find('MessageHeader')
        .shallow()
        .should.contain.text('Yo there')
    })
  })

  describe('icon', () => {
    it('does not exist by default', () => {
      shallow(<Message />)
        .should.not.have.descendants('Icon')
    })
    it('does not have a "content" wrapper by default', () => {
      shallow(<Message />)
        .should.not.have.descendants('.content')
    })
    it('adds a Icon child when defined', () => {
      const wrapper = shallow(<Message icon='user' />)

      wrapper.should.have.descendants('Icon')

      wrapper
        .find('Icon')
        .should.have.prop('name', 'user')
    })
    it('adds a "content" wrapper when defined', () => {
      shallow(<Message icon='inbox' />)
        .should.have.descendants('MessageContent')
    })
  })

  describe('dismissable', () => {
    it('has no close icon by default', () => {
      shallow(<Message />)
        .should.not.have.descendants('.close.icon')
    })
    it('adds a close icon when defined', () => {
      render(<Message dismissable />)
        .should.have.descendants('.close.icon')
    })
  })

  describe('onDismiss', () => {
    it('has no close icon by default', () => {
      shallow(<Message />)
        .should.not.have.descendants('.close.icon')
    })
    it('adds a close icon when defined', () => {
      render(<Message onDismiss={() => undefined} />)
        .should.have.descendants('.close.icon')
    })
    it('is called with (event) on close icon click', () => {
      const spy = sandbox.spy()
      const wrapper = mount(<Message onDismiss={spy} />)

      wrapper.should.have.descendants('.close.icon')

      wrapper
        .find('.close.icon')
        .simulate('click')

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({})
    })
  })
})
