import './Mission.css'

const Mission = (promps) => {
    let {item: {mission_name, launch_year, links: {mission_patch_small}}} = promps;
    return (
        <div className={'mission__card'}>
            <div className={'mission__card_name'}>
                <h2>{mission_name}</h2>
                <h4>{launch_year}</h4>
            </div>
            <div className={'mission__card_img'}>
                <img src={mission_patch_small} alt={mission_name}/>
            </div>
        </div>
    );
};

export default Mission;