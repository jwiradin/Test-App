import React, { Component } from "react";
import PlayerAPI from "../containers/PlayerAPI";
import Player, { Players } from "../containers/Player";

export class DisplayPlayers extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        let players = PlayerAPI.all();
        return (<Players players={players} />);
    }

};

export class DisplayPlayer extends Component {
    constructor(props) {
        super(props);
        this.hanledUpdate = this.hanledUpdate.bind(this);
        this.goHome = this.goHome.bind(this);
    }

    hanledUpdate = (player) => {
        PlayerAPI.update(player); 
        this.goHome();
    };

    goHome = ()=>{
        this.props.history.push('/roster')
    }

    render(){
        let player = PlayerAPI.get(parseInt(this.props.match.params.number, 10));
        return (<Player player={player} handleUpdate={this.hanledUpdate} goHome={this.goHome} />);
    }

};
