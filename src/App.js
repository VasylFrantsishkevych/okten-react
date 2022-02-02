import {Route, Routes} from "react-router-dom";

import './App.css';
import {Layout} from "./components";
import {CarPage, CommentsPage, PostPage, UserPage} from "./pages";

function App() {

  return (
    <div>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<CarPage/>}/>
                <Route path={'cars'} element={<CarPage/>}/>
                <Route path={'users'} element={<UserPage/>}/>
                <Route path={'posts'} element={<PostPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
