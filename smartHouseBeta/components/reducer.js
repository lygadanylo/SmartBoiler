export default (state = {}, action) => {
  const payload = action.payload;
  console.log('##########################################');
  console.log(action);
  console.log('##########################################');
  switch (action.type) {
    case 'CONNECTION_STATUS': {
      return {...state, cnn_status: payload};
    }
    default: {
      return {...state, payload};
    }
  }
};
