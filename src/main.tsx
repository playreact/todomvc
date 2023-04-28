import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Todos from './components/Todos'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Todos />
  </React.StrictMode>,
)
