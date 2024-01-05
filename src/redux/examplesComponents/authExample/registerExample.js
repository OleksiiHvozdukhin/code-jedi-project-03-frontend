import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';

export const Main = () => {
  const mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '', // Fullstack-developer
    email: '', // bobaq@gmail.com
    password: '', //848484876
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await dispatch(registerThunk(formData));
    // console.log(data);
    return data;
  };

  return (
    <div style={mainStyle}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
