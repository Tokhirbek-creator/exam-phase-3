import axios from 'axios';
import { ACTIONS_GET_ROOMS } from '../actions/roomsAction';
import { ACTIONS_GET_DEVICES } from '../actions/devicesAction';

export const THUNK_GET_ROOMS_FROM_DB = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/rooms');
  dispatch(ACTIONS_GET_ROOMS(response.data));
};

export const THUNK_GET_DEVICES_FROM_DB = (id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3001/rooms/${id}`);
  dispatch(ACTIONS_GET_DEVICES(response.data.devices));
};
