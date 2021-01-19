import './App.css';
import HomePage from './components/HomePage';
import StorePage from './components/StorePage';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/products">
            <StorePage />
          </Route>

          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
