import { combineReducers } from 'redux';
import main, * as fromMain from './main';

export default combineReducers({
    main,
});

export const getMain = ({main}) => main;