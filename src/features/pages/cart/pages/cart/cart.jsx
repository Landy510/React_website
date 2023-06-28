import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './cart.module.scss';
import { CartContext } from '@/shared/contexts/cartContext';
import { CartShowCase } from '../../components/cartShowCase/cartShowCase';


export function Cart(){
  const cartContext = useContext(CartContext);

  return (
    <div>
      <ul>
        {
          cartContext.items.map(item => {
            return (
              <li key={item.id}>
                <CartShowCase 
                  title={item.title}
                  count={item.count}
                  imgUrl={item.imgUrl}
                />
              </li>
            )
          })
        }
      </ul>

      <Link 
        to={'/cart/register'}
        className={[styles['navigate-btn'], 'text-h3'].join(' ')}
      >Next Step</Link>
    </div>
  )
}