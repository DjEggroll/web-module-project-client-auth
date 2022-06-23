import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import axios from 'axios';

import Login from './components/Login';
import Friends from './components/Friends';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const logout = () => {
    axios.post('http://localhost:9000/api/logout', {}, {
      headers: {
          authorization: localStorage.getItem("token")
      }
  })
      .then(res => {
        localStorage.removeItem("token");
        window.location.href = "/login"
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friend List</Link>
          </li>
          <li>
            <Link to="/friends/add">Add Friend</Link>
          </li>
          <li>
            <Link to="/logout" onClick={logout}>Logout</Link>
          </li>
        </ul>

        <Switch>

          <Route path="/login" component={Login} />

          <PrivateRoute exact path="/friends" component={Friends} />
            
          <PrivateRoute path="/friends/add" component={AddFriends} />

          <Route path="/logout" component={Logout} />

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
