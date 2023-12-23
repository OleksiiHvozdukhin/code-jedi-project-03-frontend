import { Puff } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Puff
      height="100"
      width="100"
      radius={1}
      color="#293ace"
      ariaLabel="puff-loading"
      wrapperStyle={{ position: 'fixed', top: '41%', left: '46%' }}
      wrapperClass=""
      visible={true}
    />
  );
};
