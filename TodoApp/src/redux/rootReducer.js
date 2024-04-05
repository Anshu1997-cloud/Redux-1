import { combineReducers } from 'redux';
import {authReducer} from './Authentication/Reducer';
import { appReducer } from './app_state/reducer';
import { todoReducer } from './todo/reducer';
import { themeReducer } from './Theme/reducer';

const rootReducer = combineReducers({
    app_state: appReducer,
    todos: todoReducer,
  auth: authReducer,
  theme: themeReducer
});

export default rootReducer;