import { ThreeCircles } from 'react-loader-spinner';

export const Loader = ({isMonthTable}) => {
  return (
    <ThreeCircles
      height={150}
      width={150}
      radius={1}
      outerCircleColor="#407BFF"
      middleCircleColor="#9EBBFF"
      innerCircleColor="#D7E3FF"
      ariaLabel="puff-loading"
      visible={true}
      wrapperStyle={
        isMonthTable
          ? {
              top: '50%',
              left: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }
          : {
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }
      }
    />
  );
};

