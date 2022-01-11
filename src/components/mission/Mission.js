import './Mission.css'

const Mission = (props) => {
    let {mission_name, launch_year, img} = props;

    return (
        <div className={'mission__card'}>
            <div className={'mission__card_name'}>
                <h2>{mission_name}</h2>
                <h4>{launch_year}</h4>
            </div>
            <div className={'mission__card_img'}>
                <img src={img} alt={mission_name}/>
            </div>
        </div>
    );
};

export default Mission;