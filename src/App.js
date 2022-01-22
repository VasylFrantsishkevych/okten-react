
import './App.css';
import Cars from "./components/Cars/Cars";
import Forms from "./components/Forms/Forms";
import {useState} from "react";
import {carService} from "./services/car.service";

function App() {

    const [trigger, setTrigger] = useState(null);
    const [updateForCar, setUpdateForCar] = useState({});


    // const update = data => {
    //     setTrigger(data)
    // }



  return (
    <div className="App">
        <Forms setTrigger={setTrigger} updateForCar={updateForCar}/>
        <Cars trigger={trigger} setTrigger={setTrigger} setUpdateForCar={setUpdateForCar}/>
    </div>
  );
}

export default App;
