import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//On importe tous les "components" secondaires ou de 2ème niveau, dit "stateless"
import Member from './Components/Member'
import Button from './Components/Button'

// "Dans le dur", un peu de données, gérées ensuite par une DB :

const family = {
  member1: {
    name: 'Maximilien',
    age: 10
  },
  member2: {
    name: 'Sienna',
    age: 8
  },
  member3: {
    name: 'Aramis',
    age: 6
  },
  member4: {
    name: 'Mathilda',
    age: 3
  },
  member5: {
    name: 'Charline',
    age: 8
  },
  member6: {
    name: 'Elisa',
    age: 0.5
  }
}

// Component de plus haut niveau, de Class, dit "statefull", qui distribue tous les autres components
class App extends Component {

  // Déclaration du "State", qui récupère les données
  state = {
    family
  }

// INPORTATION DE PROPS DANS LE COMPONENT PRINCIPAL, DE CLASS, GRÂCE A "THIS", QUI FAIT REFERENCE A CETTE CLASS

//On peut modifier le "State" grâce à des fonctions
  handleClick = num => {
    const familly = { ...this.state.family }
    family.member1.age += num
    this.setState({ family })
  }

  // "Fonction fléchée" handleClick équivalente à (si un seul paramètre - ici num - les parenthèses ne sont pas nécessaires) :
  /*
   handleClick (num) {
    const familly = { ...this.state.family }
    return (
      family.member1.age += num
      this.setState({ family })
    )
  }*/

// Modification du State en temps réel grâce à une fonction dans un input, en temps réel, avec un "event" (ici, le paramètre de la fonction handleChange), une "target" et sa "value"
  handleChange = event => {
    const familly = { ...this.state.family }
    const name = event.target.value
    family.member1.name = name
    this.setState({ family })
  }

  render() {

    // On "déstructure" alléger la syntaxe, on factorise et importe plus clairement
    const { titre } = this.props
    const { state } = this.state
    return (
      <div className="App">

      <h1> {titre} </h1>

      {/*On liste les components...

      On leur passe des attributs désirés (value, name, age...) sous forme d'objets JS, qui peuvent être aussi des fonctions (handleChange, handleClick...)*/}

      <input value={ family.member1.name } onChange={ this.handleChange } type="text"/>

      <Member
        age={ family.member1.age }
        name={ family.member1.name } />
      <Member
        age={ family.member2.age }
        name={ family.member2.name } />
      <Member
        age={ family.member3.age }
        name={ family.member3.name } />
      <Member
        age={ family.member4.age }
        name={ family.member4.name } />
      <Member
        age={ family.member5.age }
        name={ family.member5.name } />

      <Member
        age={ family.member6.age }
        name={ family.member6.name } >

      {/*Props children comme si il y avait un autre attribut après name pour ce membre*/}
        <strong>Je suis la petite dernière</strong>
      </Member>

      <Button
        gettingOlder = { () => this.handleClick(2) }/>

      </div>
    );
  }
}

// On exporte le component Principal ou de 1er niveau vers les components secondaires
export default App;
