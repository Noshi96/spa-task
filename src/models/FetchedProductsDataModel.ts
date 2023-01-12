import { ProductModel } from 'models/ProductModel';

export interface FetchedProductsDataModel {
  data: ProductModel[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
