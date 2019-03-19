import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = (props) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.
  console.log(props);
  console.log("Props for details ^^^");
  const renderSomething = () => {
    if(props.currentObj !== undefined){
      return (<HostInfo hostObj={props.currentObj} hostLoc={props.currentObj.area}
        updateArea={props.updateArea}/>)
    }else {
      return (<Image size='medium' src={Images.westworldLogo}/>)
    }
  }

  return(
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  )
}

export default Details


// props.currentObj !== null ? renderClick() : renderSomething()
