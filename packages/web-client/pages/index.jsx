import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit';
import Login from './routes/login';
import Register from './routes/register';
import Home from './routes/home';
import Health from './routes/health';

export default function App() {
  return (
    <AuthProvider
      authStorageType="cookie"
      authStorageName="_auth_t"
      authTimeStorageName="_auth_time"
      stateStorageName="_auth_state"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === 'https:'}
    >
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/health">
              <Health />
            </Route>
          </Switch>
        </div>
      </Router>

    </AuthProvider>
  );
}
