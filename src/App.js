import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Notification from './pages/notification';
import Container from './layouts/container';
function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route exact path="/" render={(props) => (
            <Container>
              <Home {...props} />
            </Container>)
          } />
          <Route exact path={`/notification`} render={(props) => (
            <Container>
              <Notification {...props} />
            </Container>)
          } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
