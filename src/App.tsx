import React from "react";
import { BrowserRouter as Switch, Link, Route, Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import MainPage from "./main/MainPage";
import Detial from "./detail/Detail";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Navbar />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/detail/:id" component={Detial} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
