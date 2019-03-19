import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'

import ColdStorage from './ColdStorage'


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.


  render(){
    console.log("Props for Headquarters VVVV")
    console.log(this.props);
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>
          <ColdStorage hosts={this.props.hosts} handleHost={this.props.handleHost}/>
        </Grid.Column>

        <Grid.Column width={5}>
          <Details currentObj={this.props.currentClick}
          updateArea={this.props.updateArea}
          />
        </Grid.Column>

        <Grid.Column width={3}>

        {/* and here. Take visual cues from the screenshot/video in the Readme. */}

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
