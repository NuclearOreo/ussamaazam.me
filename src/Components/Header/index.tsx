import { NavBar } from '@/Components/NavBar'
import { Outlet } from 'react-router-dom'
import { Icon } from '@/Components/Icon'

export function Header() {
  return (
    <>
      <Icon />
      <NavBar />
      <Outlet />
    </>
  )
}
