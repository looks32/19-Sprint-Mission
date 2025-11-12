import styled from 'styled-components';

function Profile() {
  return (
    <ProfileWrap>
      <div className="imgArea">
        <img src="/profile.png" alt="프로필 이미지" />
      </div>
      <div className="textArea">
        <strong>총명한ㅁㄴㅇㅁㄴ</strong>
        <span>날짜</span>
      </div>
    </ProfileWrap>
  );
}

export default Profile;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;

  .imgArea {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #dfdfdf;

    img {
      width: 100%;
    }
  }

  .textArea {
    margin-left: 16px;
    strong {
      display: block;
      margin-bottom: 2px;
      color: #4b5563;
      font-size: 14px;
      font-weight: 500;
    }

    span {
      color: #9ca3af;
      font-size: 14px;
    }
  }
`;
