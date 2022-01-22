import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/car.service";
import {CarValidator} from "../../validators/car.validator";

const Forms = ({setTrigger, updateForCar: {id, model, price, year}}) => {
    const [formErrors, setFormErrors] = useState({});
    const {
        register,
        handleSubmit,
        formState:{errors},
        setValue
    } = useForm({resolver:joiResolver(CarValidator), mode:"onTouched"});

    useEffect(() => {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    },[id])

    // const submit = (car) => {
    //     carService.create(car).then(value => setTrigger(value))
    //         .catch(errors => {
    //             setFormErrors(errors.response.data)
    //         })
    // }

    const submit = async (car) => {
        try {
            let newCar;
            if (id){
                newCar = await carService.updateById(id, car);
            }else{
                newCar = await carService.create(car);
            }
            setTrigger(newCar)
        }catch (error){
            setFormErrors(error.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
               {/* {formErrors.model && <span>{formErrors.model[0]}</span>}*/}
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {/*{formErrors.price && <span>{formErrors.price[0]}</span>}*/}
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {/*{formErrors.year && <span>{formErrors.year[0]}</span>}*/}
                {errors.year && <span>{errors.year.message}</span>}
                <button>{id?'Update':'Create'}</button>
            </form>
        </div>
    );
};

export default Forms;