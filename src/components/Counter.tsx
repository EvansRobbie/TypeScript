import React, { useReducer } from 'react'

type CounterState = {
    count: number
}
// discriminated actions
type updateAction = {
    type : 'increase' | 'decrease'
    payload: number
}
type ResetAction ={
    type: 'reset'
}
type CounterAction = updateAction | ResetAction
const initialState = {
    count:0
}

const reducer = (state: CounterState , action:CounterAction) =>{
    switch(action.type){
        case 'decrease': return{
           count: state.count - action.payload
        } 
        case 'increase': return{
            count: state.count + action.payload
        }
        case 'reset': return  initialState
        
        default:
            return state
    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleIncrease = () =>{
        dispatch({type:'increase', payload: 10})
    }
    const handleDecrease = () =>{
        dispatch({type:'decrease', payload: 10})
    }
    const handleReset = () =>{
        dispatch({type: 'reset'})
    }
  return (
    <div>
        <h2>Count:- {state.count} </h2>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter