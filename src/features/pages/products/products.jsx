import styles from './products.module.scss';
import { ProductShowCase } from './components/productShowCase/productShowCase';
import product1Url from '@/assets/images/product_1.png';
import product2Url from '@/assets/images/product_2.png';
import product3Url from '@/assets/images/product_3.png';
import { v4 as uuidv4 } from 'uuid';

const sourceData = [
  {
    id: uuidv4(),
    title: 'Shoes',
    imgUrl: product1Url
  },
  {
    id: uuidv4(),
    title: 'Pants',
    imgUrl: product2Url
  },
  {
    id: uuidv4(),
    title: 'Street Wear',
    imgUrl: product3Url
  },
]

export function Products() {
  return (
    <div className={styles['products']}>
      {
        sourceData.map(item => {
          return (
            <div 
              key={item.id}
              className={styles['item']}
            >
              <ProductShowCase 
                title= {item.title}
                imgUrl= {item.imgUrl}
              />  
            </div>      
          )
        })
      }
    </div>
  )
}