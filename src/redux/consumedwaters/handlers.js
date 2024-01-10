export const handlerAddWater = (
  state,
  { payload: { _id, waterVolume, time } }
) => {
  state.today.dailyWaterList.push({ _id, waterVolume, time });
  state.today.dailyNormFulfillment += waterVolume;
};

export const handleEditWater = (state, { payload }) => {
  const array = state.today.dailyWaterList;
  const idx = array.findIndex(item => item._id === payload._id);

  if (idx !== -1) {
    array[idx] = payload;
  }

  state.today.dailyNormFulfillment = array.reduce(
    (acc, item) => acc + item.waterVolume,
    0
  );
};

export const handlerDeleteWater = (state, { payload }) => {
  state.today.dailyWaterList = state.today.dailyWaterList.filter(
    data => data._id !== payload
  );

  const array = state.today.dailyWaterList;

  state.today.dailyNormFulfillment = array.reduce(
    (acc, item) => acc + item.waterVolume,
    0
  );
};

export const handleGetTodayWater = (state, { payload }) => {
  console.log('Payload: ', payload);
  state.today.dailyWaterList = payload;
  // state.today.dailyNormFulfillment = payload.waterVolumeSum;
  // state.today.waterVolumePercentage = payload.waterVolumePercentage;
};

export const handleGetMonthWater = (state, { payload }) => {
  state.month = payload;
};
