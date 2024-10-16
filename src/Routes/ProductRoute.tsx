import { Route } from 'react-router-dom';
import ProductList  from '../page/Products/index';

export function ProductRoute() {
  return <Route path="/products" element={<ProductList />} />;
}