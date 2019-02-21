import React from 'react'
import { SideNav, Nav } from 'react-sidenav'

import { LinkCustom, Title } from '../../styles/global'

import routes from '../../routes'

export default function Sidebar() {
  return (
    <SideNav>
      {routes.map(route => (
        <ul key={route.name}>
          <Title> {route.name}</Title>
          {route.children.map(child => (
            <li key={child.name}>
              <LinkCustom to={child.path}>
                <Nav>{child.name}</Nav>
              </LinkCustom>
            </li>
          ))}
        </ul>
      ))}
    </SideNav>
  )
}
