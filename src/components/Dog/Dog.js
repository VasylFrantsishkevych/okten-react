

const Dog = ({props}) => {
    const {dog} = props;
    return (
        <div>
            <h3>{dog}</h3>
        </div>
    );
};

export default Dog;