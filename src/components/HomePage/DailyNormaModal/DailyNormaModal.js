import Modal from 'react-modal';
// import '../../../images/sprite.svg';
import { DailyNormaForma } from './DailyNormaForma';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '592px',
    height: '712px',
    zIndex: '1300',
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
  },
};
Modal.setAppElement('#root');

export const DailyNormaModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div>
        <button onClick={onRequestClose}>
          <svg>
            <use src="../../../images/sprite.svg#icon-plus-small" />
          </svg>
        </button>
        <h2>My daily norma</h2>
        <div>
          <p>
            For woman:<span>V=(M*0,03) + (T*0,4)</span>
          </p>
          <p>
            For man:<span>V=(M*0,04) + (T*0,6)</span>
          </p>
        </div>
        <p>
          <span>*</span>V is the volume of the water norm in liters per day, M
          is your body weight, T is the time of active sports, or another type
          of activity commensurate in terms of loads (in the absence of these,
          you must set 0)
        </p>
        <h3>Calculate your rate:</h3>
        <DailyNormaForma />
      </div>
    </Modal>
  );
};
