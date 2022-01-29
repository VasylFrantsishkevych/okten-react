
import './App.css';
import {useState} from "react";
import {Cars, Form} from "./components";

function App() {

  const [cars, setCars] = useState([]);
  //функція яка приймає дані з форми
  const getFormData = (data) => {
      setCars([...cars, {id:new Date().getTime(), ...data}])
  }
  //функція видалення з бази даних
  const getCarId = (id) => {
      setCars(cars.filter(car => car.id !== id))
  }

  return (
    <div>
      <Form getFormData={getFormData}/>
      <Cars cars={cars} getCarId={getCarId}/>
    </div>
  );
}

export default App;
