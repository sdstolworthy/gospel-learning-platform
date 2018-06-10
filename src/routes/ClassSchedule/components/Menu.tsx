import * as React from 'react';

import {
  Menu,
  MenuLabel,
  MenuLink,
  MenuList,
} from 'bloomer'

export default function ScheduleMenu({}) {
  return (
    <Menu>
      <MenuLabel>General</MenuLabel>
      <MenuList>
        <li>
          <MenuLink>Dashboard</MenuLink>
        </li>
        <li>
          <MenuLink>Customers</MenuLink>
        </li>
      </MenuList>
      <MenuLabel>Administration</MenuLabel>
      <MenuList>
        <li>
          <MenuLink>Team Settings</MenuLink>
        </li>
        <li>
          <MenuLink isActive={true}>Manage Your Team</MenuLink>
        </li>
        <MenuList>
          <li>
            <MenuLink>Members</MenuLink>
          </li>
          <li>
            <MenuLink>Plugins</MenuLink>
          </li>
          <li>
            <MenuLink>Add a Member</MenuLink>
          </li>
        </MenuList>
        <li>
          <MenuLink>Invitations</MenuLink>
        </li>
        <li>
          <MenuLink>Authentication</MenuLink>
        </li>
      </MenuList>
      <MenuLabel>Transactions</MenuLabel>
      <MenuList>
        <li>
          <MenuLink>Payments</MenuLink>
        </li>
        <li>
          <MenuLink>Transfers</MenuLink>
        </li>
        <li>
          <MenuLink>Balance</MenuLink>
        </li>
      </MenuList>
    </Menu>
  )
}
