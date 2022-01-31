import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar} from "../../store/car.slice";
import {useEffect} from "react";

const Form = () => {
    const {cars: {id, model, price, year}} = useSelector(state => state['carReducer']);
    const {handleSubmit, register, reset, setValue} = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(model)
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    },[id])
    //передаємо дані з форми на константу createCar
    const submit = (data) => {
        dispatch(createCar({data}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model: <input type="text" defaultValue={''} {...register('model')}/></label>
            <label>Price: <input type="text" defaultValue={''} {...register('price')}/></label>
            <label>Year: <input type="text" defaultValue={''} {...register('year')}/></label>
            <button>{id?'Update':'Create'}</button>
        </form>
    );
};

export {Form};