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

  // Déclaration du "state", qui récupère les données
  state = {
    family
  }

//On peut modifier le "state" grâce à des fonctions
  handleClick = num => {
    const familly = { ...this.state.family }
    family.member1.age += num
    this.setState({ family })
  }

  // "Fonction fléchée" handleClick équivalente à (si un seul paramètre - ici num - les parenthèses ne sont pas nécessaires) :
  /*
   handleClick () {
    return (
    )
  }*/

//Attention, les inputs se gère en temps réel grâce à un "event" (ici, le paramètre de la fonction handleChange), une "target" et sa "value"
  handleChange = event => {
    const familly = { ...this.state.family }
    const name = event.target.value
    family.member1.name = name
    this.setState({ family })
  }

  render() {
    const { titre } = this.props
    const { state } = this.state
    return (
      <div className="App">

      <h1> {titre} </h1>

      <input value={family.member1.name} onChange={this.handleChange} type="text"/>

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
