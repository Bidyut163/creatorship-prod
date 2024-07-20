import { combineReducers } from 'redux';
import auth from './auth';
import business from './business';
import creator from './creator';
import profile from './profile';
export default combineReducers({ auth, business, creator, profile });
