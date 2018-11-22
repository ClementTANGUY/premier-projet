import React, { Fragment } from 'react'

// Component secondaire ou de 2ème niveau, dit "stateless"

// On importe "Fragment" afin de pouvoir incorporer ("wrapper") le props children ainsi que son élément html (ici strong) à la huite de l'élément h2 dans la div du component principal de class APP

// On passe les "props", c'est à dire les différents attributs de nos components sous forme d'objets JS...

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

// Ce component peut s'écrire également :

/*const Member = (props) => {

  const name = props.name
  constage = props.age
  const children = props.children
  ...

  return (
    <Fragment>
    <h2>
      { props.name.toUpperCase() } : { props.age }
    </h2>*/
    /*{ children ? <p>{ props.children }</p> : < Fragment /> }*/
    /*</Fragment>*/
 /* )
}*/

// Par ailleurs la fonction fléchée Member équivaut à la syntaxe suivante :
/*function  Member () {
  return (
    <h2></h2>
    ...
  )
}*/

// On exporte le component de 2ème niveau vers le component principal
export default Member
