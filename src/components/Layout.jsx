import React from 'react'
import { Outlet } from 'react-router-dom'
import MainFooter from './pages/MainFooter'
import MainHeader from './pages/MainHeader'

export const Layout = () => {
  return (
  <>
  <MainHeader/>
<Outlet/>
<MainFooter/>
  </>
  )
}
