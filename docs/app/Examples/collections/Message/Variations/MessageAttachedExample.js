import React from 'react'
import { Button, Checkbox, Form, Icon, Message } from 'stardust'

// TODO update Form/Fields usage after Form is updated to v1 API

const MessageAttachedExample = () => (
  <div>
    <Message
      attached
      header='Welcome to our site!'
      content='Fill out the form below to sign-up for a new account'
    />
    <Form className='attached fluid segment'>
      <Form.Fields evenlyDivided>
        <Form.Field label='First Nam'>
          <input placeholder='First Name' type='text' />
        </Form.Field>
        <Form.Field label='Last Nam'>
          <input placeholder='Last Name' type='text' />
        </Form.Field>
      </Form.Fields>
      <Form.Field label='Username'>
        <input placeholder='Username' type='text' />
      </Form.Field>
      <Form.Field label='Password'>
        <input type='password' />
      </Form.Field>
      <Form.Field className='inline'>
        <Checkbox id='terms' label='I agree to the terms and conditions' />
      </Form.Field>
      <Button className='blue submit button'>Submit</Button>
    </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Already signed up? <a href='#'>Login here</a> instead.
    </Message>
  </div>
)

export default MessageAttachedExample
