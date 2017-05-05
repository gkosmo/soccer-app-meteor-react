import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TeamList from './team-list';
import TeamStat from './team.stat';
import Player from './player';
export default class App extends Component {
  constructor(props){
    super(props);
    //setting up state
    this.state={players: [] };
  }

  componentWillMount(){
    this.setState({players:  [
      {
        _id: 1,
        name: "Gkosmo",
        ballManipulation:2,
        kickingAbilities:1,
        passingAbilities: 3,
        duelTackling: 2,
        fieldCoverage:1,
        blockingAbilities: 3,
        gameStrategy: 2,
        playmakingRisks:1
      },
      {
        _id: 3,
        name: "Boooom",
        ballManipulation:2,
        kickingAbilities:1,
        passingAbilities: 3,
        duelTackling: 2,
        fieldCoverage:1,
        blockingAbilities: 3,
        gameStrategy: 2,
        playmakingRisks:1
      },
      {
        _id: 2,
        name: "Other ONe",
        ballManipulation:2,
        kickingAbilities:1,
        passingAbilities: 3,
        duelTackling: 2,
        fieldCoverage:1,
        blockingAbilities: 3,
        gameStrategy: 2,
        playmakingRisks:1
      }
    ]});
  }


  renderPlayers() {
   return this.state.players.map((player) => (
     <TeamList key={player._id} player={player} />
   ));
  }

  render(){
    return (
      <MuiThemeProvider>
        <div className="container">
        <AppBar
          title="Soccer App By Gkosmo"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}/>
          <div className="row">
            <div className="col s12 m7"> < Player /> </div>
            <div className="col s12 m5"> TeamStat </div>
            <div className="col s12 m5">
              <h2> Team List: </h2>
              <Divider/>
              <List>
                {this.renderPlayers()}
              </List>
            </div>
           </div>
         </div>

      </MuiThemeProvider>
    )
  }
}
