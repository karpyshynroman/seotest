import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from "./components/PostList";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={PostList}/>
          <Route path='/:id' component={PostDetail}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
