// import React from 'react'
import Rating from 'src/modules/Rating/Rating'
import * as common from 'test/specs/commonTests'

describe('Rating', () => {
  common.isConformant(Rating)
  common.hasUIClassName(Rating)

  common.propValueOnlyToClassName(Rating, 'size')
  common.propValueOnlyToClassName(Rating, 'icon')
  common.propKeyOnlyToClassName(Rating, 'disabled')
})
