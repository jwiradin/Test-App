import React, {Component} from "react";


import { Nav, Navbar, NavItem, ListGroup, ListGroupItem, Col, Table, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Switch, Route, HashRouter, Link } from 'react-router-dom';
import {DisplayPlayer, DisplayPlayers} from "../services/PlayerService";


// The Roster component matches one of two different routes
// depending on the full pathname

const Roster = () => {

    return(
        <Switch>
        <Route exact path='/roster' component={DisplayPlayers} />
        <Route path='/roster/:number' component={DisplayPlayer} />
        </Switch>);
  }

export default Roster;