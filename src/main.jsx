import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UseRefComponent } from './Components/UseRefComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseRefComponent/>
  </StrictMode>,
)
