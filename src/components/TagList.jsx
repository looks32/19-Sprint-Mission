import styled from 'styled-components';

function TagList({ tags }) {
  return (
    <TagListWrap>
      {!tags?.length > 0 ? (
        <div>'태그가 없습니다.'</div>
      ) : (
        tags.map((tag) => <li key={tag}>#{tag}</li>)
      )}
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
