import React from 'react'

import { HeaderCustom } from './style'
import { LinkCustom } from '../../styles/global'

const Header = ({ siteTitle }) => (
  <HeaderCustom>
    <LinkCustom to="/">{siteTitle}</LinkCustom>
  </HeaderCustom>
)

export default Header
