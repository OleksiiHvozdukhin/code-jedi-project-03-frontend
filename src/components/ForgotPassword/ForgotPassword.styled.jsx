import styled from 'styled-components';
import { theme } from 'components/theme';
import { ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

export const Subcontainer = styled.div`
  max-width: 1440px;
`;

export const Container = styled.div`
  @media screen and (min-width: 1440px) {
    margin-top: ${theme.spacing(60)};
    margin-left: ${theme.spacing(310)};
  }
`;

export const Title = styled.h2`
  margin-bottom: ${theme.spacing(8)};
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

  &:invalid {
    color: ${theme.colors.red};
    border-color: ${theme.colors.red};
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
`;

export const BottleImage = styled.img`
  position: absolute;
  top: 60%;
  z-index: -1;

  @media screen and (max-width: 767px) {
    background-image: url('../../images/Mobile/Mobile Bottle Sign In-1x.png');
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('../../images/Mobile/Mobile Bottle Sign In-2x.png');
    }
  }

  @media screen and (min-width: 768px) {
    top: 20%;
    margin-left: ${theme.spacing(60)};
    background-image: url('../../images/Tablet/Tablet Bottle for Sign in-1x.png');
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('../../images/Tablet/Tablet Bottle for Sign in-2x.png');
    }
  }

  @media screen and (min-width: 1440px) {
    margin-left: ${theme.spacing(-25)};
    background-image: url('../../images/Desktop/Desktop Bottle for Sign in-1x.png');
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('../../images/Desktop/Desktop Bottle for Sign in-2x.png');
    }
  }
`;
