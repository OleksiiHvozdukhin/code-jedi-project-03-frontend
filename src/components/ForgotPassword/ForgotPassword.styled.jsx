import styled from 'styled-components';
import { theme } from 'components/theme';
import { ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import m1 from '../../images/Mobile/Mobile-Background-element-Sign-In-1x.png';
import m2 from '../../images/Mobile/Mobile-Background-element-Sign-In-2x.png';
import mb1 from '../../images/Mobile/Mobile-Bottle-Sign-In-1x.png';
import mb2 from '../../images/Mobile/Mobile-Bottle-Sign-In-2x.png';
import t1 from '../../images/Tablet/Tablet-Bottle-for-Sign-in-1x.png';
import t2 from '../../images/Tablet/Tablet-Bottle-for-Sign-in-2x.png';
import d1 from '../../images/Desktop/Desktop-Background-element-Main-Page-1x.png';
import d2 from '../../images/Desktop/Desktop-Background-element-Main-Page-1x.png';
import db1 from '../../images/Desktop/Desktop-Bottle-for-Sign-in-1x.png';
import db2 from '../../images/Desktop/Desktop-Bottle-for-Sign-in-2x.png';

export const Title = styled.h2`
  margin-bottom: ${theme.spacing(8)};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const Label = styled.label`
  display: flex;
  font-size: 18px;
  line-height: 1.33;
  color: ${theme.colors.dark};
  margin-bottom: ${theme.spacing(4)};
`;

export const Input = styled.input`
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.skyblue};
  margin-bottom: ${theme.spacing(8)};
  color: ${theme.colors.lightblue};
  line-height: 1.25;
  outline: none;
  width: 100%;
  max-width: 280px;

  @media screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 384px;
  }

  &::placeholder {
    color: ${theme.colors.skyblue};
  }

  &:focus {
    caret-color: ${theme.colors.dark};
    color: ${theme.colors.blue};
    border-color: ${theme.colors.skyblue};
  }

  &:active {
    color: ${theme.colors.blue};
    border-color: ${theme.colors.skyblue};
  }

  &.error {
    border-color: ${theme.colors.red};
    color: ${theme.colors.red};
  }
`;

export const SendBtn = styled.button`
  display: flex;
  padding: 10px 30px;
  margin-bottom: ${theme.spacing(8)};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${theme.colors.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: ${theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  border: 1px solid transparent;
  cursor: pointer;
  transition: box-shadow ${theme.transition};

  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }

  width: 100%;
  max-width: 280px;

  @media screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 384px;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  margin-bottom: ${theme.spacing(8)};
  color: ${theme.colors.red};
`;

export const SignInLink = styled(Link)`
  line-height: 1.25;
  color: ${theme.colors.blue};
  transition: color ${theme.transition};
  &:hover {
    color: ${theme.colors.orange};
  }
`;

export const AuthPagesWrapper = styled.div`
  height: 115vh;
  background: top center no-repeat url(${m1}),
    top 400px center no-repeat url(${mb1});
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${m2}), url(${mb2});
  }

  @media screen and (min-width: 768px) {
    background: top -70px center / cover no-repeat url(${t1});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${t2});
    }
  }

  @media screen and (min-width: 1440px) {
    background: top right -80px no-repeat url(${d1}), left -160px top no-repeat url(${db1});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${d2}), url(${db2});
    }
  }
`;
