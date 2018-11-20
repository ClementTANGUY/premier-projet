import React, { Fragment } from 'react'

// Component secondaire ou de 2ème niveau, dit "stateless"
// On importe un "Fragment" afin de pouvoir incorporer ("wrap") l'élément html children du component secondaire (ici strong) à la suite de l'élément html parent (ici le h2), le tout dans la div du component principal APP
const Member = ({ name, age, children }) => {
  return (
    <Fragment>

    <h2 style = {{
      /*On peut intégrer du css inline non SOC mais avec des conditions*/
      backgroundColor: age < 10 ? 'yellow' : 'purple',
      color: age < 10 ? 'black' : 'white'}}>
        { name.toUpperCase() } : { age }
    </h2>

    { children ? <p>{ children }</p> : < Fragment /> }

    </Fragment>
  )
}

// Rq la fonction fléchée Member équivaut à la syntaxe suivante :
/*function  Member () {
  return (
    <h2></h2>...
  )
}*/

// On exporte le component de 2ème niveau vers le component principal
export default Member
