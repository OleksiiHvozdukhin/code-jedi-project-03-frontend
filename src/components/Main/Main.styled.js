import { theme } from 'components/theme';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${theme.spacing(12)};
  @media screen and (min-width: 768px) {
    margin-top: ${theme.spacing(20)};
  }
  @media screen and (min-width: 1440px) {
    margin: 80px auto 0;
    max-width: 1014px;
    display: flex;
  }
`;
