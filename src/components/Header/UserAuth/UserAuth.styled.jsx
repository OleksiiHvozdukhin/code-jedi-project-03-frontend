import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SignInBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;

  & span {
    display: block;
    font-family: 'Roboto-regular';
    font-size: 16px;
    color: '#407BFF';
  }
`;

export const UserAuthText = styled.span`
  color: var(--Primery-Color-Blue, #407bff);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 133.333%;
`;
