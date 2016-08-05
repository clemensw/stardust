import _ from 'lodash'
import React, { PropTypes } from 'react'
import cx from 'classnames'

import Icon from '../../elements/Icon/Icon'
import MessageContent from './MessageContent'
import MessageHeader from './MessageHeader'
import MessageList from './MessageList'
import MessageListItem from './MessageListItem'

import META from '../../utils/Meta'
import { someChildType } from '../../utils/childrenUtils'
import {
  customPropTypes, getUnhandledProps, iconPropRenderer, useKeyOnly, useKeyOrValueAndKey,
} from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'

/**
 * A message displays information that explains nearby content
 */
function Message(props) {
  const {
    children,
    className,
    content,
    icon,
    header,
    dismissable,
    onDismiss,
    hidden,
    visible,
    floating,
    compact,
    attached,
    warning,
    info,
    positive,
    success,
    negative,
    error,
    color,
    size,
  } = props

  const classes = cx(
    'ui',
    size,
    color,
    useKeyOnly(icon || someChildType(children, Icon), 'icon'),
    useKeyOnly(hidden, 'hidden'),
    useKeyOnly(visible, 'visible'),
    useKeyOnly(floating, 'floating'),
    useKeyOnly(compact, 'compact'),
    useKeyOrValueAndKey(attached, 'attached'),
    useKeyOnly(warning, 'warning'),
    useKeyOnly(info, 'info'),
    useKeyOnly(positive, 'positive'),
    useKeyOnly(success, 'success'),
    useKeyOnly(negative, 'negative'),
    useKeyOnly(error, 'error'),
    'message',
    className,
  )

  const dismissIcon = (dismissable || onDismiss) && <Icon name='close' onClick={onDismiss || _.noop} />
  const rest = getUnhandledProps(Message, props)

  if (icon || header || content) {
    return (
      <div {...rest} className={classes}>
        {dismissIcon}
        {icon && iconPropRenderer(icon)}
        <MessageContent>
          {header && <MessageHeader>{header}</MessageHeader>}
          <p>{content}</p>
        </MessageContent>
      </div>
    )
  }

  return (
    <div {...rest} className={classes}>
      {dismissIcon}
      {children}
    </div>
  )
}

Message._meta = {
  library: META.library.semanticUI,
  name: 'Message',
  type: META.type.collection,
  props: {
    attached: ['bottom'],
    color: sui.colors,
    size: sui.sizes,
  },
}

Message.propTypes = {
  /** Primary content of the message. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['icon', 'header', 'content']),
    PropTypes.node,
  ]),

  /** Additional classes. */
  className: PropTypes.string,

  /** Primary content.  Mutually exclusive with children. */
  content: PropTypes.node,

  /** A message can contain an icon. */
  icon: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]),
  ]),

  /** The content of the MessageHeader, mutually exclusive with children. */
  header: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]),
  ]),

  /** A message that the user can choose to hide. */
  dismissable: PropTypes.bool,

  /** Called when the user clicks the "x" icon. This also adds the "x" icon. */
  onDismiss: PropTypes.func,

  /** A message can be hidden. */
  hidden: PropTypes.bool,

  /** A message can be set to visible to force itself to be shown. */
  visible: PropTypes.bool,

  /** A message can float above content that it is related to. */
  floating: PropTypes.bool,

  /** A message can only take up the width of its content. */
  compact: PropTypes.bool,

  /** A message can be formatted to attach itself to other content. */
  attached: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Message._meta.props.attached),
  ]),

  /** A message may be formatted to display warning messages. */
  warning: PropTypes.bool,

  /** A message may be formatted to display information. */
  info: PropTypes.bool,

  /** A message may be formatted to display a positive message.  Same as `success`. */
  positive: PropTypes.bool,

  /** A message may be formatted to display a positive message.  Same as `positive`. */
  success: PropTypes.bool,

  /** A message may be formatted to display a negative message. Same as `error`. */
  negative: PropTypes.bool,

  /** A message may be formatted to display a negative message. Same as `negative`. */
  error: PropTypes.bool,

  /** A message can be formatted to be different colors. */
  color: PropTypes.oneOf(Message._meta.props.color),

  /** A message can have different sizes. */
  size: PropTypes.oneOf(Message._meta.props.size),
}

Message.Content = MessageContent
Message.Header = MessageHeader
Message.List = MessageList
Message.List.Item = MessageListItem

export default Message
