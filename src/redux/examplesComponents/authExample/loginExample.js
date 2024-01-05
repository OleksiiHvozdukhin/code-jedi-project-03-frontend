import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';
import { selectUser, selectUserToken } from 'redux/auth/authSelectors';
import { handleLogin } from 'redux/auth/handlers';

export const Main = () => {
  const mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '', // bobaq@gmail.com
    password: '', //848484876
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const stateToken = useSelector(selectUserToken);
  const stateUser = useSelector(selectUser);

  useEffect(() => {
    console.log(stateToken, stateUser);
  }, [stateToken, stateUser]);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await dispatch(loginThunk(formData));
    const { user, token } = data.payload;
    dispatch(handleLogin({ user, token }));

    // console.log(data.payload.token); // - token
    // console.log(data.meta.requestStatus);
    // console.log(
    //   data.meta.requestStatus === 'fulfilled'
    //     ? 'Выполнено'
    //     : 'rejected'
    //     ? 'Отклонено'
    //     : null
    // );
  };

  return (
    <div style={mainStyle}>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
