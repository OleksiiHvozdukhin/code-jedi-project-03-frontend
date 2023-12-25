import styled from 'styled-components';

export const Dropdown = styled.nav`
  position: absolute;
`;

export const MenuList = styled.ul`
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 10px;
  background: var(--Primery-Color-White, #fff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: #747474;
  cursor: pointer;
`;

export const MenuBtn = styled.button`
  border: none;
  color: blue;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`;

export const Icon = styled.svg``;
