import styles from './Header.module.scss';
export default function Header() {
  console.log('styles?', styles)
  return (
    <>
      <header className={[styles['header'], 'bg-primary'].join(' ')}>
        <h1>
          <a 
            title='Ramble CrossFit'
          >
            <img 
              src="/src/assets/images/logo.png" 
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