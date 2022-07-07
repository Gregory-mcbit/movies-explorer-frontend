import React from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route path="/" exact>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies" exact>
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies" exact>
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route path="/profile" exact>
          <Header />
          <Profile />
        </Route>
        <Route path="/signup" exact>
          <Register />
        </Route>
        <Route path="/signin" exact>
          <Login />
        </Route>
        <Route path="*" exact>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
