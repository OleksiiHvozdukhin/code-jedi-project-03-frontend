import { Calendar, Desk } from '../images/icons/icons';

export const WelcomePage = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Calendar />
      <Desk />
    </div>
  );
};
