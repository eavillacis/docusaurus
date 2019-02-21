import React from 'react'
import { SideNav, Nav } from 'react-sidenav'

import { LinkCustom, Title } from '../../styles/global'

import routes from '../../routes'

export default function Sidebar() {
  return (
    <SideNav>
      {routes.map(route => (
        <React.Fragment key={route.name}>
          <Title>{route.name}</Title>
          {route.children.map(child => (
            <LinkCustom to={child.path} key={child.name}>
              <Nav>{child.name}</Nav>
            </LinkCustom>
          ))}
        </React.Fragment>
      ))}
    </SideNav>
  )
}
