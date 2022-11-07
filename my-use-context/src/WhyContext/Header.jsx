import React from 'react'
import UserInfo from './UserInfo'

const Header = ({userName}) => {
  return (
    <header>
      <UserInfo userName={userName} />
    </header>
      )
}

export default Header