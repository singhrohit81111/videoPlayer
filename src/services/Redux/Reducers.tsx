import songs from '../../data.json';


var songsLength = songs.length;
const initialState = {
    index: 0,
    isWatched: false
};

export const songChange = (state = initialState, action: any): any => {
    switch (action.type) {
        case "Add": {
            return { index: action.payload.index, isWatched: true }
        }
        default: return state;
    }
}
