import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {useState} from "react";

const Forms = () => {
    const [formErrors, setFormErrors] = useState({});
    const {
        register, handleSubmit, watch, formState:{errors}
    } = useForm();
    const submit = (car) => {
        carService.create(car).then(value => console.log(value))
            .catch(errors => {
                setFormErrors(errors.response.data)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {formErrors.model && <span>{formErrors.model[0]}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {formErrors.price && <span>{formErrors.price[0]}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {formErrors.year && <span>{formErrors.year[0]}</span>}
                <button>Save</button>
            </form>
        </div>
    );
};

export default Forms;