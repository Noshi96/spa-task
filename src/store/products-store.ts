import { configureStore } from '@reduxjs/toolkit';
import { api } from 'services/products-api';

export const productsStore = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: gDM => gDM().concat(api.middleware),
});

export type RootState = ReturnType<typeof productsStore.getState>;
