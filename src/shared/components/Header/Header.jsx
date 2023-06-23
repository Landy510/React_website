import styles from './Header.module.scss';
import logoImgUrl from '/src/assets/images/logo.png';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <header className={[styles['header'], 'bg-primary'].join(' ')}>
        <h1>
          <Link 
            to={'/'}
            title='Ramble CrossFit'
          >
            <img 
              src={logoImgUrl} 
              alt="logo-image" 
              style={{
                height: '60px',
                width: '60px'
              }}
            />
            <span>Ramble CrossFit</span>
          </Link>
        </h1>
        <ul className={styles['options']}>
          <li className={[styles['option'], 'fw-medium', 'text-h4'].join(' ')}>
            <Link to={'products'}>products</Link>
          </li>
        </ul>
      </header>
    </>
  )
}