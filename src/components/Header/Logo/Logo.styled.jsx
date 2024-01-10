import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'components/theme';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoText = styled.span`
  display: inline-block;
  color: ${theme.colors.blue};
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  width: 58px;
  height: 28px;
`;
