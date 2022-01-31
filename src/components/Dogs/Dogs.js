import Dog from "../Dog/Dog";

const Dogs = ({state, deleteDog}) => {
    return (
        <div>
            {state.dogs.map(dog => <Dog key={dog.id} dogs={dog} deleteDog={deleteDog}/>)}
        </div>
    );
};

export default Dogs;