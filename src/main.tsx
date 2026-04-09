import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CatsProvider } from './utils/context/CatsProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CatsProvider>
      <App />
    </CatsProvider>
  </StrictMode>,
)
