import styled from 'styled-components';
import ProductDesc from '../components/ProductDesc';
import { useEffect, useState } from 'react';
import { getProduct } from '../utill/api';
import { useLocation, useParams } from 'react-router-dom';

function Products() {
  const [product, setProduct] = useState();

  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProduct(productId);
      setProduct(res);
    };

    fetchData();
  }, []);

  return (
    <ProductsWrap>
      <ProductDesc {...product} />
    </ProductsWrap>
  );
}

export default Products;

const ProductsWrap = styled.div``;
