import React from 'react'
import { SideNav, Nav } from 'react-sidenav'

import { LinkCustom, Title } from '../../styles/global'
import { UlCustom, LiCustom, SideNavCustom, NavCustom } from './style'

import routes from '../../routes'

export default function Sidebar() {
  return (
    <SideNavCustom>
      {routes.map(route => (
        <UlCustom key={route.name}>
          <Title>{route.name}</Title>
          {route.children.map(child => (
            <LiCustom key={child.name}>
              <LinkCustom to={child.path}>
                <NavCustom>{child.name}</NavCustom>
              </LinkCustom>
            </LiCustom>
          ))}
        </UlCustom>
      ))}
    </SideNavCustom>
  )
}
