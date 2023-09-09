import { useReducer } from "react"


//reducer fn have two params one is state and another one is action
type counterState = {
    count: number
}

type updateCounterAction = {
    type: "incerement" | "decrement"
    payload: number
}
type resetCounterAction = {
    type: "reset"

}
type counterAction = updateCounterAction | resetCounterAction//discriminated uninion functn

const initialState = { count: 0 }

function reducer(state: counterState, action: counterAction) {
    switch (action.type) {
        case "incerement":
            return { count: state.count + action.payload }
        case "decrement":
            return { count: state.count - action.payload }
        case "reset":
            return initialState
        default:
            return state;
    }
}



function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <button onClick={() => dispatch({
                type: 'decrement',
                payload: 1
            })}>Decrement</button><button onClick={() => dispatch({
                type: 'incerement',
                payload: 1
            })}>Increment</button>
            <div>{state.count}</div>
            <button onClick={() => dispatch({
                type: 'reset'
            })}> Reset</button>
        </div>
    )
}

export default Counter
