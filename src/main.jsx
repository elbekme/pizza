import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "react-lazy-load-image-component/src/effects/blur.css"
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import LanguageContextProvider from './context/LanguageContext.jsx'
import ProductContextProvider from './context/ProductContextProvider.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
)
