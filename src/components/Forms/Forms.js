import {useReducer, useState} from "react";

import './FormStyle.css'
import Cat from "../Cat/Cat";
import Dog from "../Dog/Dog";

const reducer = (state, action) => {
    switch (action.type) {
        case 'animals':
            return {...state, [action.field]: action.payload}
    }
    return state;
}
let arrAnimals = [];

const Forms = () => {

    const [state, dispatch] = useReducer(reducer, {cat: '', dog: ''});

    const save = (e) => {
        e.preventDefault();
        arrAnimals.push({state})
        console.log(arrAnimals)
    }

    const handler = (e) => {
        dispatch({
            type: 'animals',
            field: e.target.name,
            payload: e.target.value
        })
    }

    return (
        <>
            <div className={'form'}>
                <form onSubmit={save}>
                    <label>Add Cat <input type="text" name={'cat'} value={state.cat} onChange={handler}/></label>
                    <button>Save</button>
                </form>
                <form onSubmit={save}>
                    <label>Add Dog <input type="text" name={'dog'} value={state.dog} onChange={handler}/></label>
                    <button>Save</button>
                </form>
            </div>
            <div className={'cat_and_dog'}>
                {/*{arrAnimals && <Cat props={state}/>}*/}
                {/*{arrAnimals && <Dog props={state}/>}*/}
            </div>
        </>
    );
};

export default Forms;