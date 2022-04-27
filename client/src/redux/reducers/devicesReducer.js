import { initState } from '../init/initState';
import { GET_DEVICES } from '../types/devicesTypes';

export const devicesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DEVICES:
      return action.payload;

    default: return state;
  }
};
