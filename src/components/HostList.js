import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  return(
    <Card.Group itemsPerRow={6}>
      {props.hosts}
    </Card.Group>
  )
}

export default HostList






// console.log("hostlist", props.hosts)
// let hosts = []
// if(props.hosts.length > 0){
  //   debugger
  //   hosts = props.hosts.map(host => {
    //     return <Host hostObj={host}/>
    //   });
    // }
