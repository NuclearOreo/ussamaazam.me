import { useNavigate, Outlet } from 'react-router-dom'
import { Icon } from '@/Components/Icon'
import { headerStyle, wrapper } from './styles'

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
      <div className={wrapper}>
        <div className={headerStyle}>Here are some of my thoughts:</div>
      </div>
      <Outlet />
    </>
  )
}
