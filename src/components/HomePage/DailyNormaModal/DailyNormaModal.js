import Modal from 'react-modal';
import { DailyNormaForma } from './DailyNormaForma';
import {
  BtnClose,
  CalculateTitle,
  ModalContainer,
  SmallText,
  SmallTextWrapper,
  Span,
  Text,
  TextWrapper,
  Title,
  TitleWrapper,
} from './DailyNormaModal.styled';
import SpriteIcons from '../../../images/sprite.svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1300',
    padding: 0,
    borderRadius: '10px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
  },
};
Modal.setAppElement('#root');

export const DailyNormaModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <ModalContainer>
        <TitleWrapper>
          <Title>My daily norma</Title>
          <BtnClose onClick={onRequestClose}>
            <svg width="24" height="24" stroke="#407BFF" fill="none">
              <use xlinkHref={`${SpriteIcons}#icon-close`} />
            </svg>
          </BtnClose>
        </TitleWrapper>

        <TextWrapper>
          <Text>
            For woman: <Span>V=(M*0,03) + (T*0,4)</Span>
          </Text>
          <Text>
            For man: <Span>V=(M*0,04) + (T*0,6)</Span>
          </Text>
        </TextWrapper>
        <SmallTextWrapper>
          <SmallText>
            <span>*</span>&nbsp;V is the volume of the water norm in liters per
            day, M is your body weight, T is the time of active sports, or
            another type of activity commensurate in terms of loads (in the
            absence of these, you must set 0)
          </SmallText>
        </SmallTextWrapper>
        <CalculateTitle>Calculate your rate:</CalculateTitle>
        <DailyNormaForma onRequestClose={onRequestClose} />
      </ModalContainer>
    </Modal>
  );
};
