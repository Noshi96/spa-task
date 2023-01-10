import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from 'reportWebVitals'
import ProductsPageView from 'pages/ProductsPageView'
import App from 'App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App>
      <ProductsPageView />
    </App>
  </React.StrictMode>
)

reportWebVitals()
