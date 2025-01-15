
import { ActionTypes } from "./actionTypes"

const initialState = {
    count: 0
}

function countReducer(state = initialState, action: any) {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {
                count: state.count + 1
            }
        case ActionTypes.DECREMENT:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

export default countReducer