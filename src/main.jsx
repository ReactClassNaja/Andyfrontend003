import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Index from './Routes'

window.$api = 'https://andybackend004.vercel.app/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
  ,
)
