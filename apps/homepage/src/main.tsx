import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './components/App/App'
import { SpeedInsights } from '@vercel/speed-insights/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <SpeedInsights />
  </StrictMode>,
)
