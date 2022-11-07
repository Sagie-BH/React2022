import React from 'react'
import Header from './Header'

const Layout = ({ children, user }) => {
    return (
        <div>
          <Header userName={user} />
          <main>
            {children}
          </main>
        </div>
      )
}

export default Layout