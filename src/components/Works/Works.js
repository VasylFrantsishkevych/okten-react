import {useSelector} from "react-redux";

import Work from "../Work/Work";


const Works = () => {
    const {workSchedule} = useSelector(state => state['toDoReducer']);

    return (
        <div>
            {workSchedule.map(work => <Work key={work.id} work={work}/>)}
        </div>
    );
};

export {Works};