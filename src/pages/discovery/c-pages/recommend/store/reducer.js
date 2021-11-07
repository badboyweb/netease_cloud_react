
import {Map} from 'immutable'

import {CHANGE_RECOMMEND_BANNER,CHANGE_HOT_RECOMMEND} from './constants'

const defaultState=Map({
    topBanners:[],
    hotRecommends:[]
});

export default function reducer(state=defaultState,action) {

    switch (action.type) {
        case CHANGE_RECOMMEND_BANNER:
            return state.set("topBanners",action.banner);
        case CHANGE_HOT_RECOMMEND:
            return state.set('hotRecommends',action.hotRecommends);
        default:
            return  state
    }

}
