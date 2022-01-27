import {useReducer} from "react";

const reducer = (state, action) => {
  if (action.type === 'inc'){
    return {...state, count1: state.count1 + 1}
  }if (action.type === 'dec'){
    return {...state, count1: state.count1 - 1}
  }if (action.type === 'reset'){
    return {...state, count1: action.payload}
  }if (action.type === 'inc2'){
    return {...state, count2: state.count2 + 1}
  }if (action.type === 'dec2'){
    return {...state, count2: state.count2 - 1}
  }if (action.type === 'reset2'){
    return {...state, count2: action.payload}
  }if (action.type === 'inc3'){
    return {...state, count3: state.count3 + 1}
  }if (action.type === 'dec3'){
    return {...state, count3: state.count3 - 1}
  }if (action.type === 'reset3'){
    return {...state, count3: action.payload}
  }else {
    return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

  return (
    <div>
      <div>
        <div>{state.count1}</div>
        <button onClick={() => dispatch({type: 'inc'})}>INC</button>
        <button onClick={() => dispatch({type: 'dec'})}>DEC</button>
        <button onClick={() => dispatch({type: 'reset', payload: 0})}>RESET</button>
      </div>
      <div>
        <div>{state.count2}</div>
        <button onClick={() => dispatch({type: 'inc2'})}>INC</button>
        <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>
        <button onClick={() => dispatch({type: 'reset2', payload: 10})}>RESET</button>
      </div>
      <div>
        <div>{state.count3}</div>
        <button onClick={() => dispatch({type: 'inc3'})}>INC</button>
        <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>
        <button onClick={() => dispatch({type: 'reset3', payload: 20})}>RESET</button>
      </div>
    </div>
  );
}

export default App;
