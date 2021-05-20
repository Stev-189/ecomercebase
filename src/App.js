import './App.css';
import Navbar from './components/Navbar';
import CheckoutPage from './components/CheckoutPage';
// import Product from './components/Product';
import Products from './components/Products';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import { useEffect } from 'react';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Checkout from './components/CheckoutForm/Checkout';

function App() {
  const [, dispatch] = useStateValue();// el estado global del user
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/signin">
            <SignIn />
          </Route>

          <Route path="/checkout-page">
            <CheckoutPage />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Products />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
