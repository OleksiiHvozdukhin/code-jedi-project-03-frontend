import styled from 'styled-components';

export const MainContainer = styled.div`
  background: url(${require('../../images/Desktop/Desktop-Background-Main-Page-1x.png')})
    center center / cover;
  @media screen and (min-width: 1440px) {
    margin-top: 56px;
    display: flex;
    justify-content: center;
  }
`;
