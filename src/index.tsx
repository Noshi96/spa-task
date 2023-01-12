import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import ProductsPageView from 'pages/ProductsPageView';
import App from 'App';
import { Provider } from 'react-redux';
import { productsStore } from 'store/products-store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={productsStore}>
      <App>
        <ProductsPageView />
      </App>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
