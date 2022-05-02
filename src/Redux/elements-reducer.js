import { elementsAPI } from "../api/api";

const SET_ELEMENTS = "SET_ELEMENTS"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
    isFetching: true,
    elements: []
};

const elementsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ELEMENTS:
            return {
                ...state,
                elements: action.elements
            }
        case TOGGLE_IS_FETCHING:{
            return {
                ...state,
                isFetching: action.isFetching
            }}
        default:
            return state;
    }
}

export const setElements = (elements) => ({ type: SET_ELEMENTS, elements });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const requestElements = () => {

    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        
        elementsAPI.getElements().then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setElements(data.elements));
        })
    }
}

export default elementsReducer;