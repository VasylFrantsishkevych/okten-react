import './App.css'

import Users from "./components/user/Users";

import Posts from "./components/post/Posts";
import Comments from "./components/comment/Comments";

function App() {
  return (
    <div>
      <div className={'users__posts'}>
          <Users/>
          <Posts/>
      </div>
      <Comments/>
    </div>
  );
}

export default App;
