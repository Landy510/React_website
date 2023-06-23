import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
// --- Route Component | START ---
import App from './App.jsx'
import { Index } from './features/pages/index/index.jsx';
import { Products } from './features/pages/products/products.jsx';
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
        element: <Products />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
)
