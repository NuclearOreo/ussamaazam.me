import { useNavigate, Outlet } from 'react-router-dom'
import { Icon } from '@/Components/Icon'
import { iconStyle } from './styles'

export function Blog() {
  const navigate = useNavigate()
  return (
    <>
      <span className={iconStyle} onClick={() => navigate('/')}>
        <Icon />
      </span>
      <Outlet />
    </>
  )
}
