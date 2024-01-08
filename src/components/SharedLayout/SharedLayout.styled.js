import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 8px 20px 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;

  @media screen and (min-width: 768px) {
    padding: 16px 32px 44px;
    max-width: 786px;
  }

  @media screen and (min-width: 1440px) {
    padding: 12px 112px 40px;
    max-width: 1440px;
  }
`;
