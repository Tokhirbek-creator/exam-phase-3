import { GET_ROOMS } from '../types/devicesTypes';

export const ACTIONS_GET_ROOMS = (roomsArray) => ({
  type: GET_ROOMS,
  payload: roomsArray,
});
