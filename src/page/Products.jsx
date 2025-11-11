import styled from 'styled-components';
import ProductDesc from '../components/ProductDesc';

function Products() {
  return (
    <ProductsWrap>
      <ProductDesc />
    </ProductsWrap>
  );
}

export default Products;

const ProductsWrap = styled.div``;
