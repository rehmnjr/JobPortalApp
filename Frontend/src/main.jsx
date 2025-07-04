import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import JobProvider from './Context/JobContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobProvider>
    <App />
    </JobProvider>
  </StrictMode>,
)
