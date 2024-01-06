import axios from 'axios';

// !Вставить сюда ссылку на онрендер
axios.defaults.baseURL = 'http://localhost:8000';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signup = async body => {
  const { data } = await axios.post('/auth/register', body);
  token.set(data.token);
  return data;
};

export const signin = async body => {
  const { data } = await axios.post('/auth/login', body);
  token.set(data.token);
  return data;
};

export const logout = async () => {
  await axios.post('/auth/logout');
  token.unset();
};

///////////////////////////////////////////////////////////////////////////////////////////

export const refreshUser = async currentToken => {
  token.set(currentToken);
  const { data } = await axios.get('/users/current');
  return data;
};

export const updateAvatar = async newPhoto => {
  const {
    data: { avatarURL },
  } = await axios.post('/users/avatar', newPhoto, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return avatarURL;
};

export const updateWaterNorm = async newWaterRate => {
  const { data } = await axios.patch('/users/water-rate', {
    waterRate: newWaterRate,
  });
  return data;
};

export const editUserInfo = async body => {
  const data = await axios.patch('/users', body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

///////////////////////////////////////////////////////////////////////////////////////////
// consumedWater

export const addWaters = async newWater => {
  const { data } = await axios.post('/consumedWater/today', newWater, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const editWater = async ({ newWaterUser, id }) => {
  const { data } = await axios.patch(
    `/consumedWater/today/${id}`,
    newWaterUser,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return data;
};

export const deleteWater = async id => {
  await axios.delete(`/consumedWater/today/${id}`);
};

export const getAllConsumedWaterMonth = async month => {
  const { data } = await axios.get(`/consumedWater/month/${month}`);
  return data;
};

export const getAllConsumedWaterToday = async (date, month) => {
  const { data } = await axios.get(`/consumedWater/today/${date}/${month}`);
  return data;
};
