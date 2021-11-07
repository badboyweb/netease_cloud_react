import {combineReducers} from 'redux-immutable';

import {reducer as recommendReducer} from '../pages/discovery/c-pages/recommend/store'

import {reducer as playerReducer} from '../pages/player/store'

export default combineReducers({recommend: recommendReducer, player: playerReducer});
