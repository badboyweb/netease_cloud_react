import {getSongDetail} from '@/services/player';
import {CHANGE_CURRENT_SONG} from './constants'

const changeCurrentSongAction = currentSong =>({
   type:CHANGE_CURRENT_SONG,
   currentSong
});

export const getCurrentSongAction = (ids) => {
    return dispatch => {
        getSongDetail(ids).then(res=>{
            dispatch(changeCurrentSongAction(res.songs[0]))
        })
    }
};
