import {FC} from 'react';
import {Posts, Users} from "./componnents";

const App:FC = () => {
    return (
        <div>
            <Users/>
            <Posts/>
        </div>
    );
};

export default App;