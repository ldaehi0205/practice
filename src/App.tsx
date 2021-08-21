import React, { createContext } from "react";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import MainPage from "./main/MainPage";
import Detial from "./detail/Detail";
import Cart from "./cart/Cart";
import wishlist from "./wishList/WishListPage";
import { createBrowserHistory } from "history";
import WishItemProvider from "./context/WishItemContext";

export const wishItem = createContext<any>({});

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <WishItemProvider>
          <Switch>
            <Navbar />
            <Route exact path="/" component={MainPage} />
            <Route exact path="/detail/:id" component={Detial} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/wishlist" component={wishlist} />
          </Switch>
        </WishItemProvider>
      </Router>
    </>
  );
}

export default App;
