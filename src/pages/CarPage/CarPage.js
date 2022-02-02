import {Cars, Form} from "../../components";
import './CarPageStaly.css';

const CarPage = () => {
    return (
        <div>
            <h3 className={'page__car_name'}>CARS</h3>
            <Form/>
            <Cars/>
        </div>
    );
};

export {CarPage};