import './App.css';
import HomePage from './components/HomePage';
import StorePage from './components/StorePage';
import ItemPage from './components/ItemPage';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/products" component={StorePage}/>
          <Route exact path="/products/:item" component={ItemPage}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
