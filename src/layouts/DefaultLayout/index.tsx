import * as React from 'react'

import {
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

export default class DefaultLayout extends React.Component<
  IDefaultLayoutProps
> {
  public render() {
    return (
      <div>
        <Navbar className="is-dark is-fixed">
          <NavbarBrand>
            <NavbarItem>
              <img src={''} style={{ marginRight: 5 }} /> Gospel Learning
              Platform
            </NavbarItem>
            <NavbarBurger isActive={false} />
          </NavbarBrand>
          <NavbarMenu isActive={false}>
            <NavbarStart>
              <NavbarItem href="#/">Home</NavbarItem>
              <NavbarItem hasDropdown={true} isHoverable={true}>
                <NavbarLink href="#/documentation">Documentation</NavbarLink>
                <NavbarDropdown>
                  <NavbarItem href="#/">One A</NavbarItem>
                  <NavbarItem href="#/">Two B</NavbarItem>
                  <NavbarDivider />
                  <NavbarItem href="#/">Two A</NavbarItem>
                </NavbarDropdown>
              </NavbarItem>
            </NavbarStart>
          </NavbarMenu>
        </Navbar>
        {this.props.children}
      </div>
    )
  }
}
