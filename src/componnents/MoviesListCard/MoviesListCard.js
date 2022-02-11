import './MoviesListCardStyle.css';
import {ProductionCompanies} from "./ProductionCompanies";
import {StarsRating} from "../StarsRating/StarsRating";

const MoviesListCard = ({movie}) => {
    const {budget, genres, homepage, original_title, overview, production_companies:companies, release_date,
        runtime, vote_average, vote_count, poster_path, popularity} = movie;


    return (
        <div className={'movie-details'}>
            <div className={'movie-details__card'}>
                <div className={'movie-details__card_title'}>
                    <h4>{original_title}</h4>
                </div>
                <div className={'movie-details__card_description'}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={`${original_title}`}/>
                    </div>
                    <div className={'movie-details__card_info'}>
                        <div>
                            <p>Original title: <span>{original_title}</span></p>
                            <p>Genre:
                                {genres.map(({id, name}, i) =>
                                    <span key={id}> {name}{i < genres.length - 1 && ','} </span>)}
                            </p>
                            <p>Date: <span>{release_date}</span></p>
                            <p>Budget: <span>{budget}</span></p>
                            <p>Runtime: <span>{runtime} min.</span></p>
                            <p>Popularity: <span>{popularity}</span></p></div>
                        <div >
                            <div className={'movie-details__card_rating'}>
                                <span>Rate the movie:</span>
                                <StarsRating/>
                            </div>
                            <div>
                                <div className={'movie-details__card_vote'}>
                                    <p>Vote average: <span>{vote_average}</span></p>
                                    <p>Vote count: <span>{vote_count}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'movie-details__other'}>
                <p>{overview}</p>
                <div className={'production_companies'}>
                    <h2>Production Companies</h2>
                    <div className={'production_companies_cards'}>
                        {companies.map(company => <ProductionCompanies key={company.id} company={company}/>)}
                    </div>
                    <div>
                        <h3>Homepage: <a href="">{homepage}</a></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MoviesListCard};