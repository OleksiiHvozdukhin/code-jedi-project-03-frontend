import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const IconBox = styled.div`
  display: block;
  width: 40px;
  heigt: 48px;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoText = styled.span`
  display: inline-block;
  color: var(--Primery-Color-Blue, #407bff);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  width: 58px;
  height: 28px;
`;
