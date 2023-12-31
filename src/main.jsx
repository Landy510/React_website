import React from 'react'
import ReactDOM from 'react-dom/client'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
// --- Route Component | START ---
import App from './App.jsx'
import { Index } from './features/pages/index/index.jsx';
import { Products } from './features/pages/products/products.jsx';
import { ProductDetail } from './features/pages/products/pages/productDetail/productDetail.jsx';
import { Cart } from './features/pages/cart/pages/cart/cart.jsx';
import { Index as CartIndex } from './features/pages/cart/pages/index/index.jsx';
import { StepTwo } from './features/pages/cart/pages/stepTwo/stepTwo.jsx';
import { StepThree } from './features/pages/cart/pages/stepThree/stepThree.jsx';
// --- END ---

import './index.scss'

const router = createHashRouter([
  {
    path: '/',
    element: < App/>,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/products',
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ':id',
            element: <ProductDetail />
          }
        ]
      },
      {
        path: 'cart',
        element: <CartIndex />,
        children: [
          {
            index: true,
            element: <Cart />
          },
          {
            path: 'register',
            element: <StepTwo />
          },
          {
            path: 'completed',
            element: <StepThree />
          }
        ]
      }
    ]
  }
])

library.add(fas);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
)
