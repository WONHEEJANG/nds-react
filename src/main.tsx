import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Import global styles
import './styles/variables.css'
import './styles/global.css'
import './styles/utilities.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)