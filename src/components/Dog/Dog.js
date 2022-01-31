import './DogStyle.css'

const Dog = ({dogs:{name, id}, deleteDog}) => {
    return (
        <div className={'dog'}>
            <h3>{name}</h3>
            <button onClick={() => deleteDog(id)}>Delete</button>
        </div>
    );
};

export default Dog;