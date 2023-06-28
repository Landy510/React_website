import PropTypes from 'prop-types'
import styles from './progressBar.module.scss';
import { useEffect, useRef } from 'react';

export function ProgressBar({index, title, isActive}) {

  const boxRef = useRef(null);
  const barRef = useRef(null);
  useEffect(() => {
    if(index === 0 && isActive) {
      boxRef.current.classList.add(`${styles['active']}`)
    }
    else if(isActive) {
      barRef.current.classList.add(`${styles['active']}`);
      setTimeout(() => boxRef.current.classList.add(`${styles['active']}`), 1500)
    }
  }, [index, isActive])

  return (
    <div className={styles['container']}>
      <div 
        className={styles['bar']}
        ref={barRef}
        style={{
          display: index === 0 ? 'none' : 'block'
        }}
      ></div>
      <div 
        className={styles['box']}
        ref={boxRef}
      >
        <p className={[styles['index'], 'text-h4'].join(' ')}>{ index + 1 }</p>
        <p className={[styles['title'], 'text-h4'].join(' ')}>{ title }</p>
      </div>
    </div>
  )
  
}

ProgressBar.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired, 
}