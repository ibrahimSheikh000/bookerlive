import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <App />
  </StrictMode>,
)
