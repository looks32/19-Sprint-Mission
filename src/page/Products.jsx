import styled from 'styled-components';
import ProductDesc from '../components/ProductDesc';
import Title from '../components/Title';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { getProduct } from '../utill/api';
import { useParams } from 'react-router-dom';
import CommentWrite from '../components/CommentWrite';

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
      <CommentWrap>
        <Title title="문의하기" size="16" />
        <CommentWrite />
        <Button buttonName="목록으로 돌아가기" />
      </CommentWrap>
    </ProductsWrap>
  );
}

export default Products;

const ProductsWrap = styled.div``;
const CommentWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto 0;
`;
