import styled from 'styled-components';
import TagList from './TagList';
import Profile from './Profile';
import Like from './Like';

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
          <ProfileStats>
            <Profile />
            <div className="line">
              <Like />
            </div>
          </ProfileStats>
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
  padding-bottom: 4px;
  border-bottom: 1px solid #e5e7eb;
`;

const ImgArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 486px;
  height: 486px;
  overflow: hidden;
  border-radius: 16px;
  img {
    width: auto;
  }
`;

const TextArea = styled.div`
  margin-left: 24px;
  width: calc(100% - 510px);

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
    > strong {
      display: block;
      margin: 24px 0 15px;
    }
  }
`;

const ProfileStats = styled.div`
  display: flex;
  margin-top: 62px;
  justify-content: space-between;

  .line {
    width: 111px;
    margin: 5px 0;
    padding-left: 24px;
    border-left: 1px solid #e5e7eb;
  }
`;
