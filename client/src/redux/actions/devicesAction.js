import { GET_DEVICES } from '../types/devicesTypes';

export const ACTIONS_GET_DEVICES = (devicesArray) => ({
  type: GET_DEVICES,
  payload: devicesArray,
});
