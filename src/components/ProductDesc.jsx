import styled from 'styled-components';
import TagList from './TagList';

function ProductDesc({
  id,
  name,
  description,
  price,
  tags,
  images,
  favoriteCount,
}) {
  return (
    <ProductDescWrap>
      <ImgArea>
        <img src={images} alt={name} />
      </ImgArea>
      <TextArea>
        <div className="title">
          <h2>{name}</h2>
          <strong>{price?.toLocaleString('ko-KR')}원</strong>
        </div>
        <div className="detail">
          <strong>상품 소개</strong>
          <p>{description}</p>
          <strong>상품 태그</strong>
          <TagList tags={tags} />
          <div>프로필 하트</div>
        </div>
      </TextArea>
    </ProductDescWrap>
  );
}

export default ProductDesc;

const ProductDescWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 24px auto 0;
`;

const ImgArea = styled.div`
  width: 486px;
  height: 486px;
  overflow: hidden;
  border-radius: 16px;
`;

const TextArea = styled.div`
  margin-left: 24px;

  .title {
    padding-bottom: 16px;
    border-bottom: 1px solid #e5e7eb;
    color: #1f2937;

    h2 {
      font-size: 24px;
      font-weight: 600;
      color: #1f2937;
    }

    strong {
      display: block;
      margin-top: 16px;
      font-size: 40px;
      font-weight: 600;
      color: #1f2937;
    }
  }

  .detail {
    color: #4b5563;
    strong {
      display: block;
      margin: 24px 0 15px;
    }
  }
`;
