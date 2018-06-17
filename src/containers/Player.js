import React from 'react';
import { ButtonToolbar, Nav, Navbar, NavItem, ListGroup, ListGroupItem, Col, Table, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.

export default class Player extends React.Component(props) {
    constructor(props) {
        super(props);
        this.state.player = {
            number:0,
            name:"",
            position:""
        };
        this.props.clickHandler = this.clickHandler.bind(this);
        this.props.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
        this.setState( {player: props.getPlayer(props)});
    }

    clickHandler() {
        this.props.hanledUpdate(this.state.player);
    }

    handleChange(e){
        this.setState(player[name], e.target.value);
        console.log(this.state.player);
    }

    Display() {
        return (
            <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>Number</Col>
                    <Col sm={8}>
                        <FormControl
                            name="number"
                            type="text"
                            value={this.state.player.number}
                            readOnly
                        />
                    </Col>
                    <Col sm={2}></Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>Name</Col>
                    <Col sm={8}>
                        <FormControl
                            name="name"
                            type="text"
                            value={this.state.player.name}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                    <Col sm={2}></Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>Position</Col>
                    <Col sm={8}>
                        <FormControl
                            name="position"
                            type="text"
                            value={this.state.player.position}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                    <Col sm={2}></Col>
                </FormGroup>
                <ButtonToolbar>
                    <Button href="/roster" bsClass="btn btn-default pull-right">Return</Button>
                    <Button onClick={this.props.clickHandler} bsClass="btn btn-default pull-right">Update</Button>
                </ButtonToolbar>
            </Form>
        );

        if (!player) {
            return <div>Sorry, but the player was not found</div>
        }
        return (
            <Display player={this.props.player} />
        )
    };

}

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
export const Players = (props) => (
    <Nav>
        {
            props.players.map(p => (
                <NavItem eventKey={p.number}><Link to={`/roster/${p.number}`}>{p.name}</Link></NavItem>
            ))
        }
    </Nav>
)

