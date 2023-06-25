import { Outlet } from 'react-router-dom'
import Header from '../src/shared/components/Header/Header'
import './App.module.scss';
import { cartData, CartContext} from './shared/contexts/cartContext';
import { useState } from 'react';

function App() {

  const addItem = ({id, title, count, imgUrl}) => {
    setMetaCart(prev => {
      const target = prev.items.find(item => item.title === title)
      if(target) {
        return {
          items: prev.items.map(item => {
            if(item.title === title) {
              return {
                id: target.id,
                title: target.title,
                count: target.count + count,
                imgUrl: target.imgUrl
              }
            }

            return item
          }),
          addItem
        }
      }

      return {
        items: [
          ...prev.items,
          {id, title, count, imgUrl}
        ],
        addItem
      }
      
    })
  }

  const [metaCart, setMetaCart] = useState({
    items: cartData,
    addItem
  })


  return (
    <>
      <Header />

      <CartContext.Provider value={metaCart}>
        <main>
          <Outlet />  
        </main>
      </CartContext.Provider>
    </>
  )
}

export default App
