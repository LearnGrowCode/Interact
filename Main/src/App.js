import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './SearchPage/SearchPage';
import ProfilePage from './ProfilePage/ProfilePage';
import Home from './Home/Home';

// import Navbar from './component/navbar';
const axios = require('axios').default;
function App() {
  console.log('hi')

    return(
      <div>
      <Routes>
      <Route exact path='/' element ={<Home/>} ></Route>
      <Route  path='/search' element ={<Search/>} ></Route>
      <Route  path='/profile' element ={<ProfilePage/>} ></Route>
      <Route  path='*' element ={<h1>Not Found</h1>} ></Route>
      </Routes>

      </div>
  )
}

export default App;
