import { Link } from 'react-router-dom';
import styles from './productShowCase.module.scss';
import PropTypes from 'prop-types'

export function ProductShowCase({title, imgUrl}) {
  // const [count, setCount] = useState(1);

  // function handleCountChange(value) {
  //   setCount(value);
  // }

  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>
        <span className={styles['square-icon']}></span>
        <p className='text-h3'>{title}</p>
      </h3>
      <div className={styles['img']}>
        <img src={imgUrl} alt="" />
      </div>

      {/* <div className={styles['quantity-controls']}>
        <button onClick={() => setCount(count - 1)}> - </button>
        <input 
          type="text" 
          value={count}
          onChange={e => handleCountChange(e.target.value)}
        />
        <button onClick={() => setCount(count + 1)}> + </button>
      </div>

      <button className={styles['add-btn']}>Add</button> */}

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