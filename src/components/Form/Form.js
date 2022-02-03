import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import './FormStyle.css';
import {addSchedule, countAll} from "../../store/toDo.slice";

const Form = () => {
    const {count1, count2} = useSelector(state => state['toDoReducer']);
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(addSchedule({data}))
        reset()
    }

    return (
        <div className={'form'}>
            <h2>All: {count1} Completed: {count2}</h2>
            <form onSubmit={handleSubmit(submit)}>
                <label><input type="text" placeholder={'todo'} {...register('todo')}/></label>
                <button onClick={() => dispatch(countAll())}>Save</button>
            </form>
        </div>
    );
};

export {Form};