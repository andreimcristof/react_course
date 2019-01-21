import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'A', duration: '4.05' },
        { title: 'B', duration: '4.10' },
        { title: 'C', duration: '3.25' },
        { title: 'D', duration: '2.01' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
     if(action.type === 'SONG_SELECTED'){
         return action.payload;
     }
     return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
