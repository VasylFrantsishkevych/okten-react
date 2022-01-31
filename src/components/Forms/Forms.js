import {useReducer, useRef} from "react";

import './FormStyle.css'
import {reducer} from "../Reducer/Reducer";
import Cats from "../Cats/Cats";
import Dogs from "../Dogs/Dogs";


const Forms = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const catValue = useRef();
    const dogValue = useRef();

    const saveCat = (e) => {
        e.preventDefault();
        const newCat = catValue.current.value;
        dispatch({type: 'addCatAndDog', target: 'cats', payload: {name: newCat, id: new Date().getTime()}});
        catValue.current.value = '';
    }

    const saveDog = (e) => {
        e.preventDefault();
        const newDog = dogValue.current.value;
        dispatch({type: 'addCatAndDog', target: 'dogs', payload: {name: newDog, id: new Date().getTime()}});
        dogValue.current.value = '';
    }

   const deleteCat = (id) => {
        dispatch({type: 'delete', target: 'cats', payload: {id}})
   }

    const deleteDog = (id) => {
        dispatch({type: 'delete', target: 'dogs', payload: {id}})
    }

    console.log(state);
    return (
        <>
            <div className={'form'}>
                <form onSubmit={saveCat}>
                    <label>Add Cat <input type="text"  name={'cat'} ref={catValue}/></label>
                    <button>Save</button>
                </form>
                <form onSubmit={saveDog}>
                    <label>Add Dog <input type="text" name={'dog'} ref={dogValue}/></label>
                    <button>Save</button>
                </form>
            </div>
            <div className={'wrap'}>
                <div className={'dogs_and_cats'}>
                    {state && <Cats state={state} deleteCat={deleteCat}/>}
                </div>
                <div className={'dogs_and_cats'}>
                    {state && <Dogs state={state} deleteDog={deleteDog}/>}
                </div>
            </div>
        </>
    );
};

export default Forms;