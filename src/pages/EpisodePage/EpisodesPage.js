import {useEffect, useState} from "react";
import {episodeService} from "../../services/episode.service";
import Episode from "../../components/Episode/Episode";


const EpisodesPage = () => {
    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        episodeService.getAll().then(value => setEpisode(value))
    },[])
    console.log(episode);
    return (
        <div>
            {
                episode.map(value => <Episode key={value.id} episode={episode}/>)
            }
        </div>
    );
};

export default EpisodesPage;