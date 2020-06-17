import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from "./components/PostList";
import {Router, Route, Switch, HashRouter} from "react-router-dom";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path='/' component={PostList}/>
          <Route path='/:id' component={PostDetail}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
