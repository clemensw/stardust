import React from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

import { Message } from 'stardust'

const MessageExamples = () => (
  <div>
    <ExampleSection title='Types'>
      <ComponentExample
        title='Dismissable Block'
        description='A message that the user can choose to hide'
        examplePath='collections/Message/Types/MessageDismissableBlockExample'
      >
        <Message warning>
          Dismissable blocks do not automatically close.
          Use the <code>onDismiss</code> callback to hide the message.
        </Message>
      </ComponentExample>
      <ComponentExample
        title='Icon Message'
        description='A message can contain an icon'
        examplePath='collections/Message/Types/MessageIconExample'
      />
      <ComponentExample examplePath='collections/Message/Types/MessageIconPropsExample' />
    </ExampleSection>
    <ExampleSection title='States'>
      <ComponentExample
        title='Hidden'
        description='A message can be hidden'
        examplePath='collections/Message/States/MessageHiddenExample'
      />
      <ComponentExample
        title='Visible'
        description='A message can be set to visible to force itself to be shown'
        examplePath='collections/Message/States/MessageVisibleExample'
      />
    </ExampleSection>
    <ExampleSection title='Variations'>
      <ComponentExample
        title='Floating'
        description='A message can float above content that it is related to'
        examplePath='collections/Message/Variations/MessageFloatingExample'
      />
      <ComponentExample examplePath='collections/Message/Variations/MessageFloatingPropsExample' />
      <ComponentExample
        title='Compact'
        description='A message can only take up the width of its content'
        examplePath='collections/Message/Variations/MessageCompactExample'
      />
      <ComponentExample examplePath='collections/Message/Variations/MessageCompactPropsExample' />
      <ComponentExample
        title='Attached'
        description='A message can be formatted to attach itself to other content'
        examplePath='collections/Message/Variations/MessageAttachedExample'
      />
      <ComponentExample
        title='Info'
        description='A message may be formatted to display information'
        examplePath='collections/Message/Variations/MessageInfoExample'
      />
      <ComponentExample examplePath='collections/Message/Variations/MessageInfoPropsExample' />
      <ComponentExample
        title='Warning'
        description='A message may be formatted to display warning message'
        examplePath='collections/Message/Variations/MessageWarningExample'
      />
      <ComponentExample examplePath='collections/Message/Variations/MessageWarningPropsExample' />
    </ExampleSection>
  </div>
)

export default MessageExamples
