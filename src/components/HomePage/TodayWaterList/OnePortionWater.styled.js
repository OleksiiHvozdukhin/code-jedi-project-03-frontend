import styled from 'styled-components';
import { theme } from 'components/theme';

export const OnePortionItem = styled.li`
  display: flex;
  height: 50px;
  width: 100%;
  padding: 12px 0;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.skyblue};
  width: 254px;

  @media screen and (min-width: 768px) {
    width: 646px;
  }

  @media screen and (min-width: 1440px) {
    width: 534px;
  }
`;

export const GlassIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${theme.colors.lightblue};

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const PortionText = styled.p`
  font-size: 18px;
  line-height: 1.33;
  color: ${theme.colors.blue};
  margin-left: ${theme.spacing(6)};
`;

export const TimeText = styled.p`
  font-size: 12px;
  line-height: 2;
  color: ${theme.colors.dark};
  margin-left: ${theme.spacing(6)};

  @media screen and (min-width: 768px) {
    margin-left: ${theme.spacing(8)};
  }
`;
export const SvgEdit = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
`;

export const SvgDelete = styled.svg`
  width: 16px;
  height: 16px;
  stroke: currentColor;
  fill: none;
`;
export const WrapperIcons = styled.div`
  display: flex;
  width: 50px;
  margin-left: auto;
  gap: ${theme.spacing(9)};
`;
export const EditButton = styled.button`
  border: none;
  background-color: inherit;
  margin: 0;
  padding: 0;
  position: relative;
  color: ${theme.colors.blue};
  width: 16px;
  height: 16px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 1px;
    background-color: ${theme.colors.blue};
    bottom: -3px;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;
export const DeleteButton = styled.button`
  border: none;
  background-color: inherit;
  margin: 0;
  padding: 0;
  position: relative;
  color: ${theme.colors.red};
  width: 16px;
  height: 16px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 1px;
    background-color: ${theme.colors.red};
    bottom: -3px;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;
