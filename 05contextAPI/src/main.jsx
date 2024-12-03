
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { CounterProvider } from './context/index.jsx'

createRoot(document.getElementById('root')).render(

  <CounterProvider>
    <App />
  </CounterProvider>


)
