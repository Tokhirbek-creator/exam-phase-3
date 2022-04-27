import { initState } from '../init/initState';
import { GET_ROOMS } from '../types/devicesTypes';

export const roomsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return action.payload;

    default: return state;
  }
};
