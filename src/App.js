import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Markets from './components/markets/Markets.js';
import Market from './components/markets/Market.js';
import NotFound from './components/pages/NotFound.js';
import { Provider } from 'react-redux';
import store from './store';
import './bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/markets' component={Markets} />
            <Route exact path='/markets/:zip/:radius' component={Markets} />
            <Route exact path='/market/:marketName' component={Market} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
