import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

// database - collection
import { Players } from '../api/players';

import TeamList from './team-list';
import TeamStat from './team-stat';
import Player from './player';
import AccountsWrapper from './AccountsWrapper';
export  class App extends Component {
  constructor(props) {
    super(props);

    // setting up the state
    this.state = { players: [] };
  }

  renderPlayers() {
    return this.props.players.map((player) => (
      <TeamList key={player._id} player={player} />
    ));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}>  <AccountsWrapper /> </AppBar>
          <div className="row">
            <div className="col s12 m7" ><Player /></div>
            <div className="col s12 m5" >
              <h2>Team list</h2><Link to="/new" className="waves-effect waves-light btn">Add player</Link>
              <Divider/>
                <List>
                  {this.renderPlayers()}
                </List>
              <Divider/>
            </div>
            <div className="col s12 m5" ><TeamStat/></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  players: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('players');

  return {
    players: Players.find({}, {sort: { name: 1}}).fetch(),
  };
}, App);
