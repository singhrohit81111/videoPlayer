import songs from  '../../data.json';


var songsLength = songs.length;
const initialState = {
    index: 0,
    isWatched:false
};

export const songChange = (state = initialState, action: any): any => {
    switch (action.type) {
        case "Add": {
            return { index: action.payload.index ,isWatched:true}
        }
        case "increment": {
            if (state.index == 0) {
                return { index: songsLength - 1 };
            }
            return { index: state.index - 1 };
        }
        case "decrement": {
            if (state.index == songsLength - 1) {
                return { index: 0 };
            }
            return { index: state.index + 1 };
        }
        default: return state;
    }
}
