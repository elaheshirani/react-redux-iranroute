import {combineReducers} from 'redux';
import routes from './routes';
import places from './places';

export default combineReducers({
    routes,
    places
});