import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './productDetail.module.scss';
import product1Url from '@/assets/images/product_1.png';
import product2Url from '@/assets/images/product_2.png';
import product3Url from '@/assets/images/product_3.png';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/shared/contexts/cartContext';


const sourceData = [
  {
    id: uuidv4(),
    title: 'Shoes',
    imgUrls: [
      product1Url,
      product1Url,
      product1Url
    ]
  },
  {
    id: uuidv4(),
    title: 'Pants',
    imgUrls: [
      product2Url,
      product2Url,
      product2Url
    ]
  },
  {
    id: uuidv4(),
    title: 'Street Wear',
    imgUrls: [
      product3Url,
      product3Url,
      product3Url
    ]
  },
]

export function ProductDetail() {
  const {id} = useParams();
  const [obj, setObj] = useState(null);
  const [count, setCount] = useState(1);

  const cartContext = useContext(CartContext);

  function handleCountChange(value) {
    setCount(value);
  }


  useEffect(() => {
    setObj(sourceData.find(item => item.title === id));
  }, [id])
  
  if(obj) {
    return (
      <div className={styles['container']}>
        <section className={styles['img-gallery']}>
          {
            obj.imgUrls.map((imgUrl, index) => {
              return (
                <img 
                  key={index}
                  src={imgUrl}
                />
              )
            })
          }
        </section>
        <section className={styles['product-info']}>
          <h2 className={styles['title']}>
            <span className={styles['square-icon']}></span>
            <p className='text-h2'>{ obj.title }</p>
          </h2>
          <p className={styles['info']}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni exercitationem in fuga voluptas libero, sapiente quae quos, ducimus officiis temporibus autem ipsa veritatis quibusdam similique ex vel! Impedit fugit odio totam modi odit architecto atque corporis obcaecati, nemo asperiores facere ipsa ex quia delectus. Doloribus repellat quo, nisi vero cumque omnis culpa exercitationem nulla voluptatum, minus earum labore impedit tenetur autem accusamus natus repudiandae officiis fuga! Ducimus doloremque debitis provident aspernatur doloribus odio id necessitatibus cum ad fugit quidem saepe fugiat ex natus, voluptates cumque autem, voluptatem tempore eos iure, rerum nihil? Ab iste distinctio ipsum nesciunt molestiae, deleniti a.
          </p>

          <div className={styles['quantity-controls']}>
            <button onClick={() => setCount(count - 1)}> - </button>
            <input 
              type="text" 
              className='text-h4'
              value={count}
              onChange={e => handleCountChange(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}> + </button>
          </div>

          <button 
            className={[styles['add-btn'], 'text-h5'].join(' ')}
            onClick={() => {
              cartContext.addItem(
                {
                  id, 
                  title: obj.title, 
                  count, 
                  imgUrl: obj.imgUrls[0]
                }
              )
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
            <span className='fw-bold'>ADD TO CART</span>
          </button>
        </section>
      </div>
    )
  }
  return <></>
  
}