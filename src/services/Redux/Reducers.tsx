
const initialState = {
    index: 0,
};

export const songChange = (state = initialState, action: any): any => {
    switch (action.type) {
        case "Add": {
            return { index: action.payload.index, isWatched: true }
        }
        default: return state;
    }
}
