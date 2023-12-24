import styled from 'styled-components';

export const UserMenu = styled.nav`
  position: absolute;
  top: calc(100% + 5px);
  right: 10px;
  width: 118px;
  height: 88px;
  padding: 25px;
  background-color: #fff;
  opacity: 0;
  transform: translateY(-10px);
  visibility: hidden;
  transition: 0.3s;
  &.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;

export const MenuList = styled.ul`
  margin: 0;
  width: 100%;
  padding: 0;
  list-style-type: none;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: #747474;
  cursor: pointer;
`;

export const MenuBtn = styled.button``;
