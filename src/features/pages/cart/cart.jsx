import { useContext } from 'react';
import styles from './cart.module.scss';
import { CartContext } from '@/shared/contexts/cartContext';
export function Cart(){
  const cartContext = useContext(CartContext);

  return (
    <div>
      <ul>
        {
          cartContext.items.map(item => {
            return (
              <li key={item.id}>
                <h4>{ item.title }</h4>
                <p>{ item.count }</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}