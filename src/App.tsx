import React from "react";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import MainPage from "./main/MainPage";
import Detial from "./detail/Detail";
import Cart from "./cart/Cart";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Navbar />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/detail/:id" component={Detial} />
          <Route exact path="/Cart" component={Cart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
