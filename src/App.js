import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import EpisodesPage from "./pages/EpisodePage/EpisodesPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route path={'episode'} element={<EpisodesPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
