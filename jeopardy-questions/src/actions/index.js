import axios from 'axios';


export const FETCHING_QUESTION_START = 'FETCHING_QUESTION_START';
export const FETCHING_QUESTION_SUCCESS = 'FETCHING_QUESTION_SUCCESS';
export const FETCHING_QUESTION_FAILURE = 'FETCHING_QUESTION_FAILURE';
export const fetchActivity = () => dispatch => {
    dispatch({ type: FETCHING_QUESTION_START });
    axios
        .get("http://jservice.io/api/random")
        .then(res => {
            console.log(res)
            dispatch({type: FETCHING_QUESTION_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCHING_QUESTION_FAILURE, payload: err.response})
        })
}