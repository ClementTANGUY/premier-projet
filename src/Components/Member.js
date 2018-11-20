import React, { Fragment } from 'react'

/*function  Member () {
  return (
    <h2>Membre</h2>
  )
}*/

const Member = ({ name, age, children }) => {
  return (
    <Fragment>
    <h2> { name.toUpperCase() } : { age }  </h2>
    { children ? <p>{ children }</p> : < Fragment /> }
    </Fragment>
  )
}

export default Member
