import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = (props) => {
  let areas = props.places.map(place => {
    console.log("WestworldMap", place);
    return <Area name={place.name} />
  })
  return (
    <Segment id="map" >
      {areas}
    </Segment>
  )
}

export default WestworldMap
