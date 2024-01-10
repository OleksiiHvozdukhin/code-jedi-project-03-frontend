import styled from 'styled-components';
import d1 from '../../images/Desktop/Desktop-Background-Main-Page-1x.png';
import d2 from '../../images/Desktop/Desktop-Background-Main-Page-2x.png';
import de1 from '../../images/Desktop/Desktop-Background-element-Main-Page-1x.png';
import de2 from '../../images/Desktop/Desktop-Background-element-Main-Page-2x.png';
import t1 from '../../images/Tablet/Tablet-Background-Main-Page-1x.png';
import t2 from '../../images/Tablet/Tablet-Background-Main-Page-2x.png';
import m1 from '../../images/Mobile/Mobile-Background-Main-Page-1x.png';
import m2 from '../../images/Mobile/Mobile-Background-Main-Page-2x.png';

export const MainWrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: visible;
  

  &::before {
    content: '';
    position: absolute;
          top: 5px;
      left: -32px; 
      width: 100vw; 
      margin: 0;
    
    background: top -70px center no-repeat url(${m1});
    

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${m2});
      
    }

    @media screen and (min-width: 768px) {
      height: 150vh;
      top: 5px;
      left: -32px; 
      width: 100vw; 
      margin: 0;
      background: top -91px center no-repeat url(${t1});
      

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${t2});
        
      }
    }

    @media screen and (min-width: 1440px) {
      height: 95vh;
      top: -20px;
      left: -32px; 
      width: 100vw; 
      margin: -80px; 
      background: bottom no-repeat url(${d1}),
        left -10% / contain no-repeat url(${de1});
      

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${d2}), url(${de2});
       
      }
    }

    @media screen and (min-width: 1920px) and (min-aspect-ratio: 16/9) {
      height: 100vh;
      top: -20px;
      left: -32px; 
      width: 100vw; 
      margin-left: -321px;
      background: bottom no-repeat url(${d1}),
        left -10% / contain no-repeat url(${de1});
      background-position: bottom left, left -10% center;
       background-size: 100%;

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        height: 100vh;
        top: -20px;
        left: -32px; 
        width: 100vw; 
        margin-left: -321px;
        background-image: url(${d2}), url(${de2});        
        background-size: 100%;
      }
    }

    z-index: -1;
  }
`;
