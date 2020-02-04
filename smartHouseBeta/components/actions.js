import axios from 'axios';
let ws;

export const connectionStatus = data => ({
  type: 'CONNECTION_STATUS',
  payload: data,
});

export const temperatureData = data => ({
  type: 'TEMP_DATA',
  payload: data,
});

export const closeConnection = () => dispatch => {
  if (ws) {
    ws.close();
  }
  dispatch(connectionStatus(false));
};

export const FeatchData = () => dispatch => {
  axios({
    method: 'GET',
    url: 'http://192.168.0.108:80/',
  })
    .then(response => {
      ws = new WebSocket('ws://192.168.0.108:81');
      ws.onopen = () => {
        console.log('Socket connection is open');
        dispatch(connectionStatus(true));
      };
      ws.onmessage = data => {
        console.log(data);
        dispatch(temperatureData(data.data));
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
