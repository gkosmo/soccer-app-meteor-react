import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';

export default class TeamList extends Component {
  render(){
    return (
      <ListItem
        primaryTest= {this.props.player.name}
        leftAvatar={<Avatar src='images/fight.jpeg'/>}
      />
    )
  }
}
