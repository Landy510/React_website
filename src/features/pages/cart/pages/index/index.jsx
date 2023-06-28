import { Outlet, useLocation } from 'react-router-dom'
import { ProgressBar } from '@/shared/components/progressBar/progressBar';
import styles from './index.module.scss';
import { v4 as uuidv4 } from 'uuid';

const cartUrlMaps = [
    {
      id: uuidv4(),
      title: 'cart Info',
      url: '/cart'
    },
    {
      id: uuidv4(),
      title: 'register',
      url: '/cart/register',
    },
    {
      id: uuidv4(),
      title: 'completed',
      url: '/cart/completed'
    }
]

export function Index() {
  const location = useLocation();

  return (
    <>
      <div className={styles['progress-groups']}>
        {
          cartUrlMaps.map((item, index) => {
            return (
              <ProgressBar 
                key={item.id}
                index={index}
                title={item.title}
                isActive={item.url === location.pathname}
              />
            )
          })
        }
      </div>
      
      <Outlet />
    </>
  )
}