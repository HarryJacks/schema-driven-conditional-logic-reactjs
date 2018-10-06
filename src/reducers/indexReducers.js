// Reducers Here

import schema from './pageLoad-reducer';
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  form: reduxFormReducer, // mounted under "form"
  schema
});