import React from 'react'

import Style from './Card.module.css'

function Card(props) {
  return (
   <React.Fragment>
     <div className={Style.card}>{props.children}</div>
   </React.Fragment>
  )
}

export default Card
