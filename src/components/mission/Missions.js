import {useEffect, useState} from "react";

import Mission from "./Mission";
import {getMissions} from "../services/api";

const Missions = () => {
    const [missions, setMissions] = useState([]);

    useEffect( () => {
        getMissions().then(mission => {
            const missionFilter = mission.filter(missionYear => missionYear.launch_year !== '2020');
            setMissions(missionFilter)
        });
    },[]);

    return (
        <>
            {
                missions.map(value => <Mission key={value.flight_number}
                                               item={value}/>)
            }
        </>
    );
};

export default Missions;