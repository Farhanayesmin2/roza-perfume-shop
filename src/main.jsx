import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './Component/Page/Home/Home.jsx'
import router from './Component/Router/router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
