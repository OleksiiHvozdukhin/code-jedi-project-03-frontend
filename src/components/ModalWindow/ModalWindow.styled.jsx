import { theme } from 'components/theme';
import styled from 'styled-components';

export const ModalHeader = styled.div`
  height: auto;
  /* width: auto; */
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    max-width: 256px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const ModalTitle = styled.h2`
  display: block;
`;

// export const CloseBtn = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &svg: {
//     stroke: #407bff;
//     fill: none;
//   }

//   &:hover,
//   &:focus {
//     stroke: #ff9d43;
//     fill: none;
//   }
// `;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const CloseIcon = styled.svg`
  stroke: ${theme.colors.blue};
  fill: none;
  cursor: pointer;
  transition: stroke ${theme.transition};

  &:hover,
  &:focus {
    stroke: ${theme.colors.orange};
  }
`;

export const ModalBody = styled.div``;
