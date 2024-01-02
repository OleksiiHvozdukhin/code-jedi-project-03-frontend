import SpriteIcons from '../../../images/sprite.svg';
import { OnePortionWrapper } from './OnePortionWater.styled';
export const OnePortionWater = () => {
  return (
    <OnePortionWrapper>
      <div>
        <span>🥛</span>
        <span>250ml</span>
        <span>7:00 AM</span>
      </div>
      <ul>
        <li>
          <button type="button">
            <svg width="32" height="32" stroke="#407BFF" fill="none">
              <use xlinkHref={`${SpriteIcons}#icon-pencil-square`} />
            </svg>
          </button>
        </li>
        <li>
          <button type="button">
            <svg width="32" height="32" stroke="#407BFF" fill="none">
              <use xlinkHref={`${SpriteIcons}#icon-trash`} />
            </svg>
          </button>
        </li>
      </ul>
    </OnePortionWrapper>
  );
};
