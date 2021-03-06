import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedEvent from 'src/views/Feed/FeedEvent'
import FeedLabel from 'src/views/Feed/FeedLabel'

describe('FeedEvent', () => {
  common.isConformant(FeedEvent)
  common.rendersChildren(FeedEvent)
  common.implementsShorthandProp(FeedEvent, {
    propKey: 'icon',
    ShorthandComponent: FeedLabel,
    mapValueToProps: val => ({ icon: val }),
  })
  common.implementsShorthandProp(FeedEvent, {
    propKey: 'image',
    ShorthandComponent: FeedLabel,
    mapValueToProps: val => ({ image: val }),
  })

  describe('content props', () => {
    it('renders <FeedContent> with extraImages prop', () => {
      const images = _.times(3, () => faker.image.imageUrl())
      shallow(<FeedEvent extraImages={images} />).should.have.descendants('FeedContent')
    })

    it('renders <FeedContent> with other content props', () => {
      const contentProps = ['content', 'date', 'extraText', 'meta', 'summary']

      contentProps.forEach(propKey => {
        const props = { [propKey]: faker.hacker.phrase() }
        shallow(<FeedEvent {...props} />).should.have.descendants('FeedContent')
      })
    })
  })
})
