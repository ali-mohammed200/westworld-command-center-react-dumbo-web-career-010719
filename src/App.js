import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';

import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

class App extends Component {
 state ={
   areas: [],
   hosts: [],
   currentClickObj: undefined
 }
  componentDidMount(){
    fetch("http://localhost:4000/areas").then(resp => resp.json()).then(resp => {
      this.setState({areas: resp});
    });
    fetch("http://localhost:4000/hosts").then(resp => resp.json()).then(resp =>{
      this.setState({hosts: resp});
    })
  }

  handleHostClick = (hostObj) => {
    console.log(hostObj);
    this.setState({currentClickObj: hostObj})
  }

  updateArea = (hostObj, loc) => {
    hostObj.area = loc;
    this.setState({currentClickObj: hostObj})
  }
  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  render(){

    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <WestworldMap places={this.state.areas}/>
        <Headquarters hosts={this.state.hosts} handleHost={this.handleHostClick} currentClick={this.state.currentClickObj}
        updateArea={this.updateArea}/>
      </Segment>
    )
  }
}

export default App;
