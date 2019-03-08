const initialState = {
    loading: 0,
    totalRequest:0,
};

export const getLoadStatus = (state = initialState) => {
    return state.loading
};
export const getTotalRequest = (state = initialState) => {
    return state.totalRequest
};


export const loading = (state = initialState, action) => {
    switch (action.type) {
        case 'START_LOADING':
            state.totalRequest++;
            return state;
        case 'FINISH_LOADING':
            state.loading++
            return state
        default:
            return state;
    }
};

export const namespaced = true;
export default loading;