import React, { Fragment } from 'react'
import './Button.css'

// Component secondaire ou de 2ème niveau, dit "stateless"

// On importe un "Fragment" afin de pouvoir incorporer (ou "wrapper") le props children ainsi que son élément html (ici strong) à la suite de l'élément h2 dans la div du component principal de class APP

// On passe les "props", c'est à dire les différents attributs de nos components, sous forme d'objets JS y compris des fonctions...

const Member = ({ name, age, children, hideName, handleChange, gettingOlder }) => {
  return (
    <Fragment>
    <h2 style = {{

      /*On peut intégrer du css inline sans Separation of Concern mais avec des conditions*/
      backgroundColor: age < 10 ? 'yellow' : 'purple',
      color: age < 10 ? 'black' : 'white'}}>
        { name.toUpperCase() } : { age }
    </h2>

    <button onClick={ hideName }>Be anonymous</button>

    <p></p>

    <button className="gettingOlder"
      onClick = { gettingOlder } >
      Getting older
    </button>

    <p></p>

    <input value={ name } onChange={ handleChange }
      type="text"/>

    { children ? <p>{ children }</p> : < Fragment /> }
    </Fragment>
  )
}

// Rq: Le component peut s'écrire également :

/*const Member = (props) => {

  const name = props.name
  const age = props.age
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

// On exporte le component de 2ème niveau vers le component principal
export default Member
