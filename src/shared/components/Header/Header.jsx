import styles from './Header.module.scss';
import logoImgUrl from '/src/assets/images/logo.png';
export default function Header() {
  return (
    <>
      <header className={[styles['header'], 'bg-primary'].join(' ')}>
        <h1>
          <a 
            title='Ramble CrossFit'
          >
            <img 
              src={logoImgUrl} 
              alt="logo-image" 
              height={60}
            />
            <span>Ramble CrossFit</span>
          </a>
        </h1>
        <ul className={styles['options']}>
          <li className={[styles['option'], 'fw-medium', 'text-h4'].join(' ')}>products</li>
        </ul>
      </header>
    </>
  )
}