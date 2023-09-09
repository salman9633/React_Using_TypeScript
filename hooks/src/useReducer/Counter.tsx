import { useReducer } from "react"


//reducer fn have two params one is state and another one is action
type counterState = {
    count: number
}

type counterAction = {
    type: string
    payload: number
}

const initialState = { count: 0 }

function reducer(state: counterState, action: counterAction) {
    switch (action.type) {
        case "incerement":
            return { count: state.count + action.payload }
        case "decrement":
            return { count: state.count - action.payload }
        default:
            return state;
    }
}



function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <button onClick={() => dispatch({
                type: 'incerement',
                payload: 1
            })}>Increment</button>
            <div>{state.count}</div>
            <button onClick={() => dispatch({
                type: 'decrement',
                payload: 1
            })}>Decrement</button>
        </div>
    )
}

export default Counter
