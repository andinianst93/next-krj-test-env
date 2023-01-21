import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Container from './Container'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout
