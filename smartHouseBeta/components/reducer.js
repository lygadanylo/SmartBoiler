export default (state = {}, action) => {
  const payload = action.payload;
  console.log('##########################################');
  console.log(action);
  console.log('##########################################');
  switch (action.type) {
    case 'TEMP_DATA': {
      return {...state, temperature: payload};
    }
    default: {
      return {...state, payload};
    }
  }
};
