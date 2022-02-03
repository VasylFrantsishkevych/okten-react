import {useDispatch} from "react-redux";

import './WorkStyle.css';
import {countAllDec, countCompletedDec, deleteSchedule, toDoChek} from "../../store/toDo.slice";

const Work = ({work}) => {
    const {id, todo, status} = work;
    const dispatch = useDispatch();

    const submit = () => {
        dispatch(toDoChek({id}))
    }
    const deleteWork = () => {
        dispatch(deleteSchedule({id}));
        dispatch(countAllDec());
        if (status === true){
            dispatch(countCompletedDec())
        }
    }

    return (
        <div className={'work'}>
            <input type="checkbox" value={status} onChange={submit}/>
            <div className={status ? 'change' : ''}>{todo}</div>
            <button onClick={deleteWork}>Delete</button>
        </div>
    );
};

export default Work;