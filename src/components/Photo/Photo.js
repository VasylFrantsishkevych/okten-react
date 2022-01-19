import './PhotoStyle.css'

const Photo = ({photo}) => {
    const {albumId, id, title, thumbnailUrl} = photo;
    return (
        <div className={'photo__card'}>
            <div>
                <h3>id: {id}</h3>
                <h3>album: {albumId}</h3>
                <h5>title: {title}</h5>
            </div>
            <div>
                <img src={thumbnailUrl} alt={id}/>
            </div>
        </div>
    );
};

export default Photo;