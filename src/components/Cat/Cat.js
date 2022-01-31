import './CatStyle.css'

const Cat = ({cats: {name, id}, deleteCat}) => {
    return (
        <div className={'cat'}>
            <h3>{name}</h3>
            <button onClick={() => deleteCat(id)}>Delete</button>
        </div>
    );
};

export default Cat;