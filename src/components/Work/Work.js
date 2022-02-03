import {useDispatch} from "react-redux";

import './WorkStyle.css';
import {deleteSchedule, toDoChek} from "../../store/toDo.slice";

const Work = ({work}) => {
    const {id, todo, status} = work;
    const dispatch = useDispatch();

    const submit = () => {
        dispatch(toDoChek({id}))
    }

    return (
        <div className={'work'}>
            <input type="checkbox" value={status} onChange={submit}/>
            <div className={status ? 'change' : ''}>{todo}</div>
            <button onClick={()=> dispatch(deleteSchedule({id}))}>Delete</button>
        </div>
    );
};

export default Work;