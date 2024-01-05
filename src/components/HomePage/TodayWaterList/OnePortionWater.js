import SpriteIcons from '../../../images/sprite.svg';
import {
  BtnList,
  OnePortionWrapper,
  PortionData,
  PortionText,
  TodoBtn,
} from './OnePortionWater.styled';
export const OnePortionWater = () => {
  return (
    <OnePortionWrapper>
      <PortionData>
        <PortionText>
          <svg width="36" height="36" stroke="#9EBBFF" fill="none">
            <use xlinkHref={`${SpriteIcons}#icon-glass`} />
          </svg>
        </PortionText>
        <PortionText>250 ml</PortionText>
        <PortionText>7:00 AM</PortionText>
      </PortionData>
      <BtnList>
        <li>
          <TodoBtn type="button">
            <svg width="24" height="24" stroke="#9EBBFF" fill="none">
              <use xlinkHref={`${SpriteIcons}#icon-pencil-square`} />
            </svg>
          </TodoBtn>
        </li>
        <li>
          <TodoBtn type="button">
            <svg width="24" height="24" stroke="#EF5050" fill="none">
              <use xlinkHref={`${SpriteIcons}#icon-trash`} />
            </svg>
          </TodoBtn>
        </li>
      </BtnList>
    </OnePortionWrapper>
  );
};
