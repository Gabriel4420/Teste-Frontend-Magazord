import { Outlet } from 'react-router-dom'
import Header from '../Header'

const DefaultTemplate = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultTemplate
