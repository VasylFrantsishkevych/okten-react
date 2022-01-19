import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import {CommentsPostIdPage, PostDetailsPage, PostsPage, PostUserIdPage, UserDetailsPage, UsersPage} from "./pages";


function App() {
  return (
    <>
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route path={'users'} element={<UsersPage/>}>
                  <Route path={':id'} element={<UserDetailsPage/>}>
                    <Route path={'/users/:id/posts'} element={<PostUserIdPage/>}/>
                  </Route>
              </Route>
              <Route path={'posts'} element={<PostsPage/>}>
                  <Route path={':id'} element={<PostDetailsPage/>}>
                      <Route path={'/posts/:id/comments'} element={<CommentsPostIdPage/>}/>
                  </Route>
              </Route>
          </Route>
      </Routes>
    </>
  );
}

export default App;
