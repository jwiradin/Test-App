import React from 'react';
import { ButtonToolbar, Nav, Navbar, NavItem, ListGroup, ListGroupItem, Col, Table, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {player: props.player};
        this.clickHandler = this.clickHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        console.log(props);
    };

    componentDidMount() {
        //this.setState( {player: this.props.getPlayer()});
    }

    clickHandler = () => {
        console.log(this.state.player);
        console.log(this.props);
        this.props.handleUpdate(this.state.player);
    }

    handleChange(e) {
        console.log(this.state.player);
        console.log(e);
        console.log(e.target);
        let cur = Object.assign({}, this.state.player);
        cur[e.target.name] = e.target.Value;

        this.setState({ player: cur });
        console.log(this.state.player);
    }

    render() {
        if (!this.state.player) {
            return <div>Sorry, but the player was not found</div>
        }

        return(
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                    />
                </Col>
                <Col sm={2}></Col>
            </FormGroup>
            <ButtonToolbar>
                <Button href="/roster" bsClass="btn btn-default pull-right">Return</Button>
                <Button onClick={this.clickHandler} bsClass="btn btn-default pull-right">Update</Button>
            </ButtonToolbar>
        </Form>
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

