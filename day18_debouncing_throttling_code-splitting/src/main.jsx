import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import Approutes from './Approutes.jsx'

createRoot(document.getElementById('root')).render(
 <Approutes/>
)
