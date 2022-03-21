const defaultState = {
    query: '',
}

const SET_QUERY = 'SET_QUERY';
const GET_QUERY = 'GET_QUERY';

export const queryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return {...state, query: action.payload}
        case GET_QUERY:
            return state.query;
        default:
            return state;
    }
}

export const setQueryAction = (payload) => ({type: SET_QUERY, payload})

export const getQueryAction = (payload) => ({type: GET_QUERY, payload})
