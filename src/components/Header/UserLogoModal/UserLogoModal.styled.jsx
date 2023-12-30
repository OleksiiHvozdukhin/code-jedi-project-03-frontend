import styled from 'styled-components';

export const Dropdown = styled.nav`
  position: absolute;
  top: 100px;
  right: 32px;
  padding: 16px;
  background: var(--Primery-Color-White, #fff);
  width: fit-content;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
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

export const Icon = styled.svg`
  stroke: #407bff;
  fill: none;
`;
