import { Outlet } from 'react-router-dom'
import styles from './styles.module.css'

const ErrorTemplate = () => {
  return (
    <div className={styles.grid}>
      <header className={styles.header} role="banner">
        Template Error
      </header>
      <Outlet />
    </div>
  )
}

export default ErrorTemplate
