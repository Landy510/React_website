import PropTypes from 'prop-types'
import styles from './cartShowCase.module.scss';

export function CartShowCase({title, count, imgUrl}) {
  return (
    <div className={styles['container']}>
      <div 
        className={styles['img']}
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      >
      </div>
      <div className={styles['info']}>
        <h3>
          <span className={styles['square-icon']}></span>
          <p className='text-h3'>{ title }</p>
        </h3>
        <p>
          count: {count}
        </p>
      </div>
    </div>
  )
}

CartShowCase.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired
}