import styled from 'styled-components';

function Like() {
  return (
    <LikeWrap>
      <img src="/ico_like_32.svg" alt="좋아요" />
      <span>123</span>
    </LikeWrap>
  );
}

export default Like;

const LikeWrap = styled.div`
  display: flex;
  align-items: center;
  color: #6b7280;
  padding: 4px 12px;
  border-radius: 35px;
  border: 1px solid #e5e7eb;

  img {
    margin-right: 4px;
  }
`;
