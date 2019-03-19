import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  const handleClick = () => {
    props.handleHost(props.hostObj)
  }

  return(
    <Card
      className="host"
      image={props.hostObj.imageUrl}
      onClick={(handleClick)}
      raised
    />
  )
}

export default Host

// <Card
//   className="host selected"
//   {/* NOTE: The className "host selected" renders a different style than simply "host". */}
//   onClick={ /* On Click what? */}
//   image={props.hostObj.imageUrl}
//   raised
// />
