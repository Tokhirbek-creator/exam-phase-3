import { combineReducers } from 'redux';
import { roomsReducer } from './roomsReducer';
import { devicesReducer } from './devicesReducer';

export const rootReducer = combineReducers({
  rooms: roomsReducer,
  devices: devicesReducer,
});
