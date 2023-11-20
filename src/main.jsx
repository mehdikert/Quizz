import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Logo from '../src/assets/Logo.png'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <img src={Logo} alt="" style={{
      position: 'absolute',
      top: '-30px',
      left: '30px',
      filter: 'drop-shadow(0px 0px 5px #515765)',
    }} />
    <App />
  </React.StrictMode>,
)
