import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import './FormStyle.css';
import {addSchedule} from "../../store/toDo.slice";

const Form = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(addSchedule({data}))
        reset()
    }

    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit(submit)}>
                <label><input type="text" placeholder={'todo'} {...register('todo')}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export {Form};