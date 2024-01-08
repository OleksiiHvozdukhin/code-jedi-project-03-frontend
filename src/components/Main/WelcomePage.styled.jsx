import styled from 'styled-components';
import d1 from '../../images/Desktop/Desktop-Background-Main-Page-1x.png';
import d2 from '../../images/Desktop/Desktop-Background-Main-Page-2x.png';
import de1 from '../../images/Desktop/Desktop-Background-element-Main-Page-1x.png';
import de2 from '../../images/Desktop/Desktop-Background-element-Main-Page-2x.png';
import t1 from '../../images/Tablet/Tablet-Background-Main-Page-1x.png';
import t2 from '../../images/Tablet/Tablet-Background-Main-Page-2x.png';
import m1 from '../../images/Mobile/Mobile-Background-Main-Page-1x.png';
import m2 from '../../images/Mobile/Mobile-Background-Main-Page-2x.png';

export const Tracker = styled.div`
  @media screen and (max-width: 767px) {
    padding-bottom: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-bottom: 50px;
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
  }
`;

export const MainWrapper = styled.div`
  /* width: 320px; */
  /* margin: 24px auto 0;
  padding: 0px 20px 40px; */
  background-image: url(${m1});
  /* background-size: cover, 280px 208px;
  background-position: top left, top 80px center; */
  background-repeat: no-repeat;
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${m2});
  }

  @media screen and (min-width: 768px) {
    /* width: 768px;
    margin: 40px auto 0;
    padding: 0px 32px 44px; */
    background-image: url(${t1});
    /* background-size: cover, 518px 386px;
    background-position: top left, top 16px center; */
    background-repeat: no-repeat;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${t2});
    }
  }

  @media screen and (min-width: 1440px) {
    /* width: 100%;
    height: 100%; */
    background-image: url(${d1}), url(${de1});
    background-repeat: no-repeat;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${d2}), url(${de2});
    }
  }
`;
