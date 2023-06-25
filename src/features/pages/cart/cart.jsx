import { useContext } from 'react';
import styles from './cart.module.scss';
import { CartContext } from '@/shared/contexts/cartContext';
import { CartShowCase } from './components/cartShowCase/cartShowCase';

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
    </div>
  )
}