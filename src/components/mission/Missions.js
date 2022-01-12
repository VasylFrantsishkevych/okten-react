import {useEffect, useState} from "react";

import Mission from "./Mission";
import {getMissions} from "../services/api";

const Missions = () => {
    const [missions, setMissions] = useState([]);

    useEffect( () => {
        getMissions().then(mission =>
            setMissions(mission));
    },[]);

    const missionFilter = missions.filter(missionYear => missionYear.launch_year !== '2020');

    return (
        <>
            {
                missionFilter.map(value => <Mission
                    key={value.flight_number}
                    mission_name={value.mission_name}
                    launch_year={value.launch_year}
                    img={value.links.mission_patch_small}/>)
            }
        </>
    );
};

export default Missions;