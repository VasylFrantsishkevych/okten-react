import {Route, Routes} from "react-router-dom";

import './App.css';
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";

function App() {
  return (
    <>
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route path={'users'} element={<UsersPage/>}>
                <Route path={':id'} element={<UserDetailsPage/>}/>
              </Route>
              <Route path={'posts'} element={<PostsPage/>}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;
