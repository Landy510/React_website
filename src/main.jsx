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
