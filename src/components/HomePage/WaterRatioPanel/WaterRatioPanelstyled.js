import { theme } from 'components/theme';
import styled from 'styled-components';

export const WaterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WaterPanel = styled.div`
  position: relative;
  text-align: center;
`;
export const WaterLabel = styled.label`
  display: block;
  font-size: 20px;
  color: ${theme.colors.blue};
  margin-bottom: 10px;
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
  width: 280px;
  height: 36px;
  background: ${theme.colors.blue};
  color: ${theme.colors.white};
  border-radius: 10px;
  border: none;
  margin-top: 16px;
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
