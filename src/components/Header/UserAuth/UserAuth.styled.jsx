import styled from 'styled-components';
import { theme } from 'components/theme';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(4)};
  color: ${theme.colors.blue};
  line-height: 1.33;
  transition: color ${theme.transition};
  &:hover {
    color: ${theme.colors.orange};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
