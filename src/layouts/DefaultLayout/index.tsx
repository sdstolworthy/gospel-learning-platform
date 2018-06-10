import * as React from 'react'

import {
  Icon,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarDivider,
  NavbarDropdown,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  NavbarStart,
} from 'bloomer'

interface IDefaultLayoutProps {
  children?: React.ReactNode
}

export default function DefaultLayout({ children }: IDefaultLayoutProps) {
  return (
    <div>
      <Navbar className="is-dark is-fixed">
        <NavbarBrand>
            <NavbarItem>
                <img src={''} style={{ marginRight: 5 }} /> Gospel Learning Platform
            </NavbarItem>
            <NavbarItem isHidden='desktop'>
                <Icon className='fa fa-github' />
            </NavbarItem>
            <NavbarItem isHidden='desktop'>
                <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
            </NavbarItem>
            <NavbarBurger isActive={false} />
        </NavbarBrand>
        <NavbarMenu isActive={false}>
            <NavbarStart>
                <NavbarItem href='#/'>Home</NavbarItem>
                <NavbarItem hasDropdown={true} isHoverable={true}>
                    <NavbarLink href='#/documentation'>Documentation</NavbarLink>
                    <NavbarDropdown>
                        <NavbarItem href='#/'>One A</NavbarItem>
                        <NavbarItem href='#/'>Two B</NavbarItem>
                        <NavbarDivider />
                        <NavbarItem href='#/'>Two A</NavbarItem>
                    </NavbarDropdown>
                </NavbarItem>
            </NavbarStart>
        </NavbarMenu>
      </Navbar>
      {children}
    </div>
  )
}
