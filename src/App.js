import './App.css';
import Header from './header/Header';
import Home from "./Home";
import Header2 from './header/Header2';
import Checkout from "./Checkout";
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //only run once when app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log("user is ....", authUser)

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null

        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<><Header /><Header2 /> <Home /></>} />
          <Route path="/checkout" element={<> <Header />
            <Header2 /><Checkout /> </>} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout/login' element={<Login />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
