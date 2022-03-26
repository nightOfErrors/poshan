import Home from './components/Home';
import Authentication from './components/Authentication';
import Stats from './components/Stats';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {


  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Authentication} />
          <Route exact path="/stats" component={Stats} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
