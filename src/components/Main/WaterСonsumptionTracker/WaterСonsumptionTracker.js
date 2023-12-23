import { Calendar, Desk, Tools } from '../../../images/icons/icons';
import './style.css';

export const WaterСonsumptionTracker = () => {
  return <div className={'water-tracker'}>

    <span className={'title'}>
            Water consumption tracker
    </span>

    <span className={'second-title'}>
      Record daily water intake and track
    </span>

    <span className={'tracker'}>
          Tracker Benefits
    </span>
    <div className={'tracker-list'}>
      <div className={'tracker-list-element'}>
        <Calendar />
        <div className={'element-text'}>
          Habit drive
        </div>

      </div>

      <div className={'tracker-list-element'}>
        <Desk />
        <div className={'element-text'}>
          View statistics
        </div>
      </div>
      <div className={'tracker-list-element'}>
        <Tools />
        <div className={'element-text'}>
          Personal rate setting
        </div>
      </div>
    </div>
    <button style={{
      width: '384px',
      height: '44px',
      padding: '10px, 30px, 10px, 30px',
      borderRadius: '10px',
      gap: '10px',
      background: '#407BFF',
      border: 0,
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '24px',
      color: '#FFFFFF'

    }}>
      Try tracker

    </button>
  </div>
    ;
};
