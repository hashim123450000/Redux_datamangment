import logo from './logo.svg';
import './App.css';
import NavBar from "./com/appbar/index"
import Body from './com/body';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import MYstore from './store/store'
import { Provider } from 'react-redux';

import Wishlist from './com/wishlist';
import Signup from './com/signup';
import Login from './com/login';
import Liked from './com/liked';
import BUYING from './com/buying';
import Home from './com/home/home';


function App() {



  return (
    <div className="App">

      <Provider store={MYstore}>
        <BrowserRouter>
          < NavBar />





          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/body' element={<Body />} />
            <Route path='/sgnup' element={<Signup />} />
            <Route path='/logn' element={<Login />} />
            <Route path='/wishlist' element={<Wishlist />} />
            < Route path='/liked' element={<Liked />} />
            <Route path='/buy' element={<BUYING />} />

          </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
