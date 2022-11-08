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
