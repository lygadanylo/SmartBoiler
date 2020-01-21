import axios from 'axios';
let ws;

export const tempData = data => ({
  type: 'TEMP_DATA',
  payload: data,
});

export const FeatchData = () => dispatch => {
  axios({
    method: 'GET',
    url: 'http://192.168.0.108:80/',
  })
    .then(response => {
      dispatch(tempData(response.data.SID));
      ws = new WebSocket('ws://192.168.0.108:81');
      ws.onopen = () => {
        console.log('Socket connection is open');
      };
      ws.onmessage = data => {
        console.log(data);
      };
      ws.onerror = error => {
        console.log(error);
      };
      ws.onclose = () => {
        console.log('Socket connection is close');
      };
    })
    .catch(error => {
      console.log(error);
    });
};
