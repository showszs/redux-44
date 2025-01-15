import { ActionTypes } from "./actionTypes"
import { CounterAction } from "./types"

export const increment = () : CounterAction => ({
    type: ActionTypes.INCREMENT
})

export const decrement = (): CounterAction => ({
    type: ActionTypes.DECREMENT
})