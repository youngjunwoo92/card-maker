import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login authService={authService} />
          </Route>
          <Route path='/maker'>
            <Maker
              cardRepository={cardRepository}
              FileInput={FileInput}
              authService={authService}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
