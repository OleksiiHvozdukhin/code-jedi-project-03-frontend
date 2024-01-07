import SpriteIcons from '../../../images/sprite.svg';
import {
  DeleteButton,
  EditButton,
  GlassIcon,
  OnePortionItem,
  PortionText,
  SvgDelete,
  SvgEdit,
  TimeText,
  WrapperIcons,
} from './OnePortionWater.styled';
// import {
//   BtnList,
//   OnePortionWrapper,
//   PortionData,
//   PortionText,
//   TodoBtn,
// } from './OnePortionWater.styled';
export const OnePortionWater = () => {
  return (
    <OnePortionItem>
      <GlassIcon>
        <use xlinkHref={`${SpriteIcons}#icon-glass`} />
      </GlassIcon>
      <PortionText>250 ml</PortionText>
      <TimeText>7:00 AM</TimeText>
      <WrapperIcons>
        <EditButton type="button">
          <SvgEdit>
            <use xlinkHref={`${SpriteIcons}#icon-pencil-square`} />
          </SvgEdit>
        </EditButton>
        <DeleteButton type="button">
          <SvgDelete>
            <use xlinkHref={`${SpriteIcons}#icon-trash`} />
          </SvgDelete>
        </DeleteButton>
      </WrapperIcons>
    </OnePortionItem>
  );
};
