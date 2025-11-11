import styled from 'styled-components';

function TagList() {
  return (
    <TagListWrap>
      {['#아이패드 미니', '#아이패드 미니', '#아이패드 미니'].map((tag) => (
        <li>{tag}</li>
      ))}
    </TagListWrap>
  );
}

export default TagList;

const TagListWrap = styled.ul`
  display: flex;
  gap: 8px;

  li {
    padding: 5px 16px;
    border-radius: 26px;
    background-color: #f3f4f6;
  }
`;
