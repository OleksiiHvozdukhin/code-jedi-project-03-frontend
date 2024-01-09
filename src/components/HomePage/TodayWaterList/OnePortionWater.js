import { ModalWindow } from 'components/ModalWindow/ModalWindow';
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
import { useState } from 'react';
import { DeleteModal } from './DeleteModal';
import { EditModal } from './EditModal';
// import {
//   BtnList,
//   OnePortionWrapper,
//   PortionData,
//   PortionText,
//   TodoBtn,
// } from './OnePortionWater.styled';
export const OnePortionWater = () => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <>
      <OnePortionItem>
        <GlassIcon>
          <use xlinkHref={`${SpriteIcons}#icon-glass`} />
        </GlassIcon>
        <PortionText>250 ml</PortionText>
        <TimeText>7:00 AM</TimeText>
        <WrapperIcons>
          <EditButton type="button" onClick={() => setIsEditOpen(true)}>
            <SvgEdit>
              <use xlinkHref={`${SpriteIcons}#icon-pencil-square`} />
            </SvgEdit>
          </EditButton>
          <DeleteButton type="button" onClick={() => setIsDeleteOpen(true)}>
            <SvgDelete>
              <use xlinkHref={`${SpriteIcons}#icon-trash`} />
            </SvgDelete>
          </DeleteButton>
        </WrapperIcons>
      </OnePortionItem>
      <ModalWindow
        title="Delete entry"
        isOpen={isDeleteOpen}
        onRequestClose={() => {
          setIsDeleteOpen(false);
        }}
      >
        <DeleteModal
          title="Delete entry"
          isOpen={isDeleteOpen}
          onRequestClose={() => {
            setIsDeleteOpen(false);
          }}
        />
      </ModalWindow>
      <ModalWindow
        title="Edit the entered amount of water"
        isOpen={isEditOpen}
        onRequestClose={() => {
          setIsEditOpen(false);
        }}
      >
        <EditModal
          title="Edit the entered amount of water"
          isOpen={isEditOpen}
          onRequestClose={() => {
            setIsEditOpen(false);
          }}
        />
      </ModalWindow>
    </>
  );
};
