import styled from 'styled-components';

export const ModalHeader = styled.div`
height: 32px
width: auto;
display: flex;
justify-content: space-between;
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
  stroke: #407bff;
  fill: none;

  &:hover,
  &:focus {
    stroke: #ff9d43;
  }
`;

export const ModalBody = styled.div``;
