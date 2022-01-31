import Cat from "../Cat/Cat";

const Cats = ({state, deleteCat}) => {
    return (
        <div>
            {state.cats.map(cat => <Cat key={cat.id} cats={cat} deleteCat={deleteCat}/>)}
        </div>
    );
};

export default Cats;