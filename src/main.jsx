import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppCorrected from './AppCorrected.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCorrected />
  </StrictMode>,
)
