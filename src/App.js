import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './compnents/Home';
import Fav from './compnents/Fav';

class App extends React.Component {
  render() {
    console.log('app', this.props);
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/profile'>
              <Fav />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
