import { useEffect, useRef } from 'react';
import styles from './index.module.scss';
export function Index() {
  const h2Ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      h2Ref.current.classList.add(`${styles['active']}`);
    }, 500)
  }, [])

  return (
    <div className={styles['hero-image']}>
      <div className={styles['heroImage-text']}>
        <h2 
          className='line-height-unset'
          ref={h2Ref}
        >Ramble Crossfit</h2>
        <p className='text-h4 text-align-r line-height-unset'>Start your Crossfit journey</p>
      </div>
    </div>
  )
}