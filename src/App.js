import {useReducer} from "react";

const reducer = (state, action) => {
  switch (action.type){
    case 'count1':
      if (action.target === 'inc'){
        return {...state, count1: state.count1 + 1}
      }else if (action.target === 'dec'){
        return {...state, count1: state.count1 - 1}
      }else if (action.target === 'reset'){
        return {...state, count1: action.payload}
      }
      return state;
    case 'count2':
      if (action.target === 'inc'){
        return {...state, count2: state.count2 + 1}
      }else if (action.target === 'dec'){
        return {...state, count2: state.count2 - 1}
      }else if (action.target === 'reset'){
        return {...state, count2: action.payload}
      }
      return state;
    case 'count3':
      if (action.target === 'inc'){
        return {...state, count3: state.count3 + 1}
      }else if (action.target === 'dec'){
        return {...state, count3: state.count3 - 1}
      }else if (action.target === 'reset'){
        return {...state, count3: action.payload}
      }
      return state;
    default:
      throw new Error('Error')
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

  return (
    <div>
      <div>
        <div>{state.count1}</div>
        <button onClick={() => dispatch({type: 'count1', target: 'inc'})}>INC</button>
        <button onClick={() => dispatch({type: 'count1', target: 'dec'})}>DEC</button>
        <button onClick={() => dispatch({type: 'count1', target: 'reset', payload: 0})}>RESET</button>
      </div>
      <div>
        <div>{state.count2}</div>
        <button onClick={() => dispatch({type: 'count2', target: 'inc'})}>INC</button>
        <button onClick={() => dispatch({type: 'count2', target: 'dec'})}>DEC</button>
        <button onClick={() => dispatch({type: 'count2', target: 'reset', payload: 10})}>RESET</button>
      </div>
      <div>
        <div>{state.count3}</div>
        <button onClick={() => dispatch({type: 'count3', target: 'inc'})}>INC</button>
        <button onClick={() => dispatch({type: 'count3', target: 'dec'})}>DEC</button>
        <button onClick={() => dispatch({type: 'count3', target: 'reset', payload: 20})}>RESET</button>
      </div>
    </div>
  );
}

export default App;
