import React, {Component} from "react";
import PlayerAPI from "../containers/PlayerAPI";
import Player, {Players} from "../containers/Player";

export default class PlayerService extends Component(){
  constructor(props){
    super(props);
    this.hanledUpdate = this.hanledUpdate.bind(this);
  }

  hanledUpdate = (player) => {
    console.log(player);
  };

  getPlayer = (props) => {
        return PlayerAPI.get(parseInt(props.match.params.number, 10));
    };

  getAllPlayer = () => {
      return PlayerAPI.all();
  }

};