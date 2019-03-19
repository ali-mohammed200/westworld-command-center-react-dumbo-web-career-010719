import React from 'react';
import { Segment } from 'semantic-ui-react'
import Host from './Host'
import HostList from './HostList'

const ColdStorage = (props) => {
  console.log("ColdStorage", props);
  let hosts = props.hosts.map(host => {
      return <Host hostObj={host} handleHost={props.handleHost}/>
    })


  return (<Segment.Group className="HQComps">
  <Segment compact>
  <h3 className="labels">ColdStorage</h3>
  </Segment>
  <Segment compact>
  <HostList hosts={hosts}/>


  </Segment>
  </Segment.Group>);
}


export default ColdStorage
