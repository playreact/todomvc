import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Todo from './components/TodoMVC'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
)
