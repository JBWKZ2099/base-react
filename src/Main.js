import React from 'react';
import { Switch, Route } from 'react-router-dom';

/*Header y Footer*/
import Home from "./pages/Home";
import Contact from "./pages/Contact";

class Main extends React.Component {
  render() {
    return (
      <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' component={Home}></Route>
        <Route path='/contacto' component={Contact}></Route>
      </Switch>
    );
  }
}

export default Main;