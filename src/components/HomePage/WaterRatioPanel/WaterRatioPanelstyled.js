import { theme } from 'components/theme';
import styled from 'styled-components';

export const WaterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: normal;
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 60%;
  }
`;

export const WaterPanel = styled.div`
  position: relative;
  text-align: center;
  width: 280px;
  margin-right: 12px;
  @media screen and (min-width: 768px) {
    width: 356px;
  }

  @media screen and (min-width: 1440px) {
    width: 391px;
  }
`;

export const WaterLabel = styled.label`
  display: block;
  font-size: 18px;
  line-height: 1.33;
  color: ${theme.colors.blue};
  margin-bottom: 8px;
  text-align: start;
`;
export const WaterRangeField = styled.input`
  appearance: none;
  outline: none;
  width: 325px;
  height: 8px;
  margin-bottom: 14px;
  background: ${theme.colors.skyblue};
  border-radius: 5px;
  overflow: hidden;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 8px;
    height: 8px;
    background: ${theme.colors.white};
    border-radius: 50%;
    cursor: pointer;
    box-shadow: -410px 0 0 400px ${theme.colors.lightblue};
  }
`;
export const BtnAddWater = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 76px;
  width: 280px;
  background: ${theme.colors.blue};
  color: ${theme.colors.white};
  line-height: 1.25;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border-radius: 10px;
  border: none;
  margin-top: 16px;
  margin-bottom: 40px;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }

  & svg {
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    padding: 10px 104px;
    font-size: 18px;
    line-height: 1.33;
    margin-bottom: 61px;
  }
  @media screen and (min-width: 1440px) {
    width: 178px;
    padding: 10px 30px;
  }
`;

export const PercentageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PercentageValue = styled.span`
  color: ${theme.colors.blue};
  font-size: 16px;
  margin-top: 4px;
  position: relative;
  &:before {
    position: absolute;
    content: '';
    width: 1px;
    height: 8px;
    background-color: ${theme.colors.lightblue};
    left: 50%;
    top: -10px;
  }
`;
