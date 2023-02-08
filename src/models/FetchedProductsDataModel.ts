import { ProductModel } from 'models';

export default interface FetchedProductsDataModel {
  data: ProductModel[];
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
}
