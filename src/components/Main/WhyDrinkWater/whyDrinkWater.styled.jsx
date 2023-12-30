import { theme } from 'components/theme';
import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0px 4px 14px 0px rgba (64, 123, 255, 0.3);
  background-color: ${theme.colors.secondaryLight};
  border-radius: 10px;
  margin-top: 40px;
  padding: 24px 16px;

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    margin-top: 60px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 81px;
    margin-top: 34px;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 12px;
`;

const List = styled.ul``;

const ListItem = styled.li`
  line-height: 1.25;
  display: flex;
  align-items: center;
  gap: 8px;
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

export { Container, Title, List, ListItem };
