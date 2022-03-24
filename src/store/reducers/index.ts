import { combineReducers } from 'redux';
import candidates from './candidates';

const rootReducer = combineReducers({ candidates });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
