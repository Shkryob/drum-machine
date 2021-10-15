import { createStore } from "redux";

const initialState = {
    'display': '',
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_DISPLAY":
            return { ...state, display: action.display };
        default:
            return state;
    }
}
export default createStore(reducer);