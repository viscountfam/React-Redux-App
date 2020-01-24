import {
    FETCHING_QUESTION_START,
    FETCHING_QUESTION_SUCCESS,
    FETCHING_QUESTION_FAILURE
} from '../actions'

const initialState = {
    isLoading: false,
    question: null,
    error: ''
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_QUESTION_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCHING_QUESTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                question: action.payload
            }
        case FETCHING_QUESTION_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }


};