import { theme } from 'components/theme';
import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  background-color: ${theme.colors.light};
  border-radius: 10px;
  padding: 24px 16px;

  @media screen and (min-width: 768px) {
    width: 494px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: ${theme.spacing(40.5)};
    margin-top: ${theme.spacing(17)};
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: ${theme.spacing(6)};
`;

export const ListItem = styled.li`
  line-height: 1.25;
  display: flex;
  align-items: center;
  gap: ${theme.spacing(4)};

  &:not(:last-child) {
    margin-bottom: ${theme.spacing(8)};
  }

  &::before {
    content: '';
    border-color: ${theme.colors.blue};
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: 50%;
  }
`;
