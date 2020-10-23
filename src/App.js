import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
// import Navbar from './components/partial-components/navbar/Navbar'
import Home from './components/home/Home'
import Login from './components/login/Login'
import PanelAdmin from './components/system/PanelAdmin'
import PageNotFound from './components/pageNotFound/PageNotFound'


function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/admin_panel" component= {PanelAdmin} />
          <Route component={PageNotFound} />          
        </Switch>
      </Router>
    </>
  );
}



export default App;
