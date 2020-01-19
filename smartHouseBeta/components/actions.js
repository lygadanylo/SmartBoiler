import axios from 'axios';

export const tempData = data => ({
  type: 'TEMP_DATA',
  payload: data,
});

export const FeatchData = () => dispatch => {
  axios({
    method: 'GET',
    url: 'http://192.168.0.108:3000/',
  })
    .then(response => {
      dispatch(tempData(response.data.temp));
    })
    .catch(error => {
      console.log(error);
    });
};
