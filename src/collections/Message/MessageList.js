import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function MessageList(props) {
  const { className, children} = props
  const rest = getUnhandledProps(MessageList, props)
  const classes = cx('list', className)

  return <ul {...rest} className={classes}>{children}</ul>
}

MessageList._meta = {
  library: META.library.semanticUI,
  name: 'MessageList',
  parent: 'Message',
  type: META.type.collection,
}

MessageList.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.node,
}

export default MessageList
