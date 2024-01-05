import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/auth/authOperations';

export const Main = () => {
  const mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  };
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await dispatch(logoutThunk());
    console.log(data.meta.requestStatus);
  };

  return (
    <div style={mainStyle}>
      <form onSubmit={handleSubmit}>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
};
