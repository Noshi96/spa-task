import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import ProductsPageView from 'pages/ProductsPageView';
import App from 'App';
import { Provider } from 'react-redux';
import { productsStore } from 'store/products-store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={productsStore}>
        <App>
          <ProductsPageView />
        </App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
