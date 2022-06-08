import './App.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import {Routes,Route} from "react-router-dom"
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Post from './components/Posts/Post';
import PostDetails from './components/PostDetails/PostDetails';


function App() {
  return (
    <div className="App">
     <Header></Header>     
     <Routes>
       <Route path='/' element={<Home/>} ></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/about' element={<About/>} ></Route>
       <Route path='/friends' element={<Friends/>} ></Route>
       <Route path='/friend/:friendId' element={<FriendDetails/>} ></Route>
       <Route path='/posts' element={<Post/>} >
         <Route path=':postId' element={<PostDetails/>} ></Route>
       </Route>

     </Routes>

    </div>
  );
}

export default App;
