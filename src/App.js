import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
// import Navbar from './components/partial-components/navbar/Navbar'
import Home from './components/home/Home'
import Login from './components/login/Login'
import PanelAdmin from './components/system/PanelAdmin'
// import PageNotFound from './components/pageNotFound/PageNotFound'


function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login" >
            <Login />
          </Route>
          <Route  path="/admin_panel">
            <PanelAdmin />
          </Route>
        </Switch>
      </Router>
    </>
  );
}



export default App;
