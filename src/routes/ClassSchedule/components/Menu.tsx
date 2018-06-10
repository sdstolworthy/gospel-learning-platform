import * as React from 'react'

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
          <MenuLink isActive={true}>Class Schedule</MenuLink>
        </li>
        <li>
          <MenuLink>Class Members</MenuLink>
        </li>
      </MenuList>
    </Menu>
  )
}
