
import React, { Component } from 'react';
import { Switch, Route, HashRouter, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Nav, Navbar, NavItem,Grid } from 'react-bootstrap';
import Schedule from "./containers/Schedule";
import Roster from "./containers/Roster";
import Home from "./containers/Home";






// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/roster' component={Roster} />
      <Route path='/schedule' component={Schedule} />
    </Switch>
  </main>
)

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <Navbar>
    <Nav>
      <NavItem eventKey={1}><Link to='/'>Home</Link></NavItem>
      <NavItem eventKey={2}><Link to='/roster'>Roster</Link></NavItem>
      <NavItem eventKey={3}><Link to='/schedule'>Schedule</Link></NavItem>
    </Nav>
  </Navbar>
)

const App = () => (
  <Grid>
    <Header />
    <Main />
  </Grid>
)

// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))

export default App;