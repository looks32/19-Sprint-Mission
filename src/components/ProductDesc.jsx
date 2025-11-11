import styled from 'styled-components';
import TagList from './TagList';

function ProductDesc() {
  return (
    <ProductDescWrap>
      <ImgArea>
        <img src="/aa.png" alt="" />
      </ImgArea>
      <TextArea>
        <div className="title">
          <h2>아이패드미니 팔아요</h2>
          <strong>500,000원</strong>
        </div>
        <div className="detail">
          <strong>상품 소개</strong>
          <p>
            액정에 잔기스랑 주변부 스크래치있습니다만 예민하신분아니면 전혀
            신경쓰이지않을정도입니다. 박스 보관중입니다. 메모용과
            넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나 문제점을 못느꼈네요
            잘 안써서 싸게넘깁니다! 택배거래안합니다.
          </p>
          <strong>상품 태그</strong>
          <TagList />
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
