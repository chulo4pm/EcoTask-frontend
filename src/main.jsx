import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { enforceSessionOnlyLogin } from './rememberMe'

// Log out "don't remember me" sessions after the browser was closed.
enforceSessionOnlyLogin()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
