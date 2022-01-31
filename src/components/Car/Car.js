import {useDispatch} from "react-redux";

import {createCar, deleteOneCar} from "../../store/car.slice";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            {/*передаємо id як обєкт в метод deleteCar*/}
            <button onClick={() => dispatch(deleteOneCar({id}))}>Delete</button>
            <button onClick={() => dispatch(createCar(car))}>Update</button>
        </div>
    );
};

export {Car};