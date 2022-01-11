import {useEffect, useState} from "react";
import Mission from "./Mission";


const Missions = () => {
    const [missions, setMissions] = useState([]);

    useEffect( () => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(mission => setMissions(mission.filter(mission => mission.launch_year !== '2020')));
    },[]);
    return (
        <>
            {missions.map(value => <Mission key={value.flight_number} mission_name={value.mission_name}
            launch_year={value.launch_year} img={value.links.mission_patch_small}/>)}
        </>
    );
};

export default Missions;