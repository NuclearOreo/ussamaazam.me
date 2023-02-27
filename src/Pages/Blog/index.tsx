import { useNavigate, Outlet } from 'react-router-dom'
import { Icon } from '@/Components/Icon'

export function Blog() {
  const navigate = useNavigate()
  return (
    <>
      <div onClick={() => navigate('/')}>
        <Icon />
      </div>
      <Outlet />
    </>
  )
}
