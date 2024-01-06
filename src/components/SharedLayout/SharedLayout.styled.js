import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 280px;
  gap: 24px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1216px;
  }
`;
