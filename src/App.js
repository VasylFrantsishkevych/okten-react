import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import {
    AlbumsPage,
    CommentsPostIdPage,
    PhotosPage,
    PostDetailsPage,
    PostsPage,
    PostUserIdPage,
    UserDetailsPage,
    UsersPage
} from "./pages";


function App() {
  return (
    <>
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route path={'users'} element={<UsersPage/>}>
                  <Route path={':id'} element={<UserDetailsPage/>}>
                    <Route path={'posts'} element={<PostUserIdPage/>}/>
                  </Route>
                  <Route path={':id/albums'} element={<AlbumsPage/>}/>
              </Route>
              <Route path={'/photos'} element={<PhotosPage/>}/>
              <Route path={'posts'} element={<PostsPage/>}>
                  <Route path={':id'} element={<PostDetailsPage/>}>
                      <Route path={'comments'} element={<CommentsPostIdPage/>}/>
                  </Route>
              </Route>
          </Route>
      </Routes>
    </>
  );
}

export default App;
