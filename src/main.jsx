import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Auth/LoginAuth.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/RouterApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
