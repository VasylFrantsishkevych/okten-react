import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {CarValidator} from "../../validator/car.validator";
import './FormStyle.css';
import {createCar, updateCarById} from "../../store/carSlice/car.slice";


const Form = () => {
    const {carUpdate} = useSelector(state => state['carReducer']);

    const {handleSubmit,
        register,
        reset,
        setValue,
        formState:{errors}
    } = useForm({resolver:joiResolver(CarValidator), mode:"onTouched"});
    const dispatch = useDispatch();

    useEffect(() => {
        if (carUpdate){
            setValue('model', carUpdate.model)
            setValue('price', carUpdate.price)
            setValue('year', carUpdate.year)
        }
    },[carUpdate])
    //передаємо дані з форми на константу createCar
    const submit = (data) => {
        let newCar;
        if (carUpdate.id){
            newCar = updateCarById({id: carUpdate.id, car:data});
            reset()
        }else {
            newCar = createCar({data});
            reset()
        }
        dispatch(newCar)
    }


    return (
        <form onSubmit={handleSubmit(submit)} className={'form'}>
            <div>
                <label>Model: <input type="text" {...register('model')}/></label>
                {errors.model && <div>{errors.model.message}</div>}
            </div>
            <div>
                <label>Price: <input type="text" {...register('price')}/></label>
                {errors.price && <div>{errors.price.message}</div>}
            </div>
            <div>
                <label>Year: <input type="text" {...register('year')}/></label>
                {errors.year && <div>{errors.year.message}</div>}
            </div>
            <button>{carUpdate.id?'Update':'Create'}</button>
        </form>
    );
};

export {Form};