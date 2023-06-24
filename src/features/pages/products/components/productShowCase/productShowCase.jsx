import { Link } from 'react-router-dom';
import styles from './productShowCase.module.scss';
import PropTypes from 'prop-types'

export function ProductShowCase({title, imgUrl}) {

  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>
        <span className={styles['square-icon']}></span>
        <p className='text-h3'>{title}</p>
      </h3>
      <div className={styles['img']}>
        <img src={imgUrl} alt="" />
      </div>

      <Link 
        to={`/products/${title}`}
        className={[styles['navigate-btn'], 'text-h2'].join(' ')}
      >Product Info</Link>
    </div>
  )
}

ProductShowCase.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
}