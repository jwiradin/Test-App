import React, {Component} from "react";


import { Nav, Navbar, NavItem, ListGroup, ListGroupItem, Col, Table, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Switch, Route, HashRouter, Link } from 'react-router-dom';
import PlayerService from "../services/PlayerService";


// The Roster component matches one of two different routes
// depending on the full pathname

const Players = () =>{
    
}

const Roster = () => (
    <Switch>
      <Route exact path='/roster' component={Players} />
      <Route path='/roster/:number' component={Player} />
    </Switch>
  )

export default Roster;