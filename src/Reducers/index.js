import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title:' No scrubs' ,duratino:'4:08'},
        {title:' No scrubs' ,duratino:'4:28'},
        {title:' No scrubs' ,duratino:'4:38'},
    ]
}


const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})


