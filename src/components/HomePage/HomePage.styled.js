import styled from 'styled-components';
import d1 from '../../images/Desktop/Desktop-Background-element-Main-Page-1x.png';
import d2 from '../../images/Desktop/Desktop-Background-element-Main-Page-2x.png';
import db1 from '../../images/Desktop/Desktop-Botle-Home-screen-1x.png';
import db2 from '../../images/Desktop/Desktop-Botle-Home-screen-1x.png';
import t1 from '../../images/Tablet/Tablet-Background-element-Home-Screen-1x.png';
import t2 from '../../images/Tablet/Tablet-Background-element-Home-Screen-2x.png';
import tb1 from '../../images/Tablet/Tablet-Bottle-Home-Screen-1x.png';
import tb2 from '../../images/Tablet/Tablet-Bottle-Home-Screen-2x.png';
import m1 from '../../images/Mobile/Mobile-Background-element-Home-screen-1x.png';
import m2 from '../../images/Mobile/Mobile-Background-element-Home-screen-2x.png';
import mb1 from '../../images/Mobile/Mobile-Bottle-home-screen-1x.png';
import mb2 from '../../images/Mobile/Mobile-Bottle-home-screen-2x.png';

export const HomeContainer = styled.section`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

// export const FlexBoxWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

export const HomePageWrapper = styled.div`
  height: 100vh;
  background: top left, top 40px center no-repeat url(${m1}),
    top 100px center no-repeat url(${mb1});
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${m2}), url(${mb2});
  }

  @media screen and (min-width: 768px) {
    background: top -10px right -60px no-repeat url(${t1}),
      top center no-repeat url(${tb1});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${t2}), url(${tb2});
    }
  }

  @media screen and (min-width: 1440px) {
    background: center top 40px no-repeat url(${d1}),
      top left -95px no-repeat url(${db1});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${d2}), url(${db2});
    }
  }
`;
