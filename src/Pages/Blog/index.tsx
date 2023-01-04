import { useNavigate, Outlet } from 'react-router-dom'
import { Icon } from '@/Components/Icon'

export function Blog() {
  const navigate = useNavigate()
  const routerChange = (path: string) => {
    navigate(path)
  }
  return (
    <>
      <div onClick={() => routerChange('/')}>
        <Icon />
      </div>
      <Outlet />
    </>
  )
}
