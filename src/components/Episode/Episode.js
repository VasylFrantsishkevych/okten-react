
import './EpisodeStyle.css'

const Episode = ({props}) => {

    const {episode: {results: {id, name, air_date, episode}}} = props;

    return (
        <div>
            <h2>name: {name}</h2>
            <h4>air_date: {air_date}</h4>
            <h4>episode: {episode}</h4>
        </div>
    );
};

export default Episode;