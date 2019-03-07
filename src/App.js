import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//On importe tous les "components" secondaires ou de 2ème niveau, dit "stateless"
import Member from './Components/Member'

/*import Button from './Components/Button'*/

// "Dans le dur", un peu de données, récupérées par la suite d'une DB ou d'une API :

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
    family,
    isShown: false
  }

// IMPORTATION DES PROPS DANS LE COMPONENT PRINCIPAL (OU DE CLASS), GRÂCE A "THIS", QUI FAIT AINSI REFERENCE A CETTE CLASS

// ON PEUT ALORS MODIFIER LE "STATE" GRÂCE A DES FONCTIONS

  handleClick = (id, num) => {
    // On copie le State
    const familly = { ...this.state.family }
    // On lui affecte une nouvelle donnée
    family[id].age += num
    // On le met à jour
    this.setState({ family })
  }

  // RQ NOUVEAUTE ES6 :
  // - "Fonction fléchée" handleClick équivalente à :
    /* handleClick (num) {
       const familly = { ...this.state.family }
       return (
        family.member1.age += num
        ...
       )
     }*/
  // - Si un seul paramètre - ici num - les parenthèses ne sont pas nécessaires

// Modification du State en temps réel grâce à une fonction à l'intérieur d'un component input, avec un "event" (ici, le paramètre de la fonction handleChange), une "target" et sa "value"
  handleChange = (event, id) => {
    const familly = { ...this.state.family }
    const name = event.target.value
    family[id].name = name
    this.setState({ family })
  }

  handleShowDetails = () => {
    const isShown = !this.state.isShown
    this.setState({ isShown })
  }

  hideName = id => {
    const familly = { ...this.state.family }
    family[id].name = 'X'
    this.setState({ family })
  }

  render() {

    // Nouveauté ES6: destructuring afin d'alléger la syntaxe, alors on factorise et importe plus clairement
    const { titre } = this.props
    const { state, isShown } = this.state

    // On peut utiliser du conditionnel un peu plus complexe que du ternaire dans le render
    // let ≠ const let peut être modifier

    let details = null

    if (isShown) {
      details = <strong>Je suis la petite dernière</strong>
    }

    // On peut récupérer les données du State, qui sont des objets, sous forme d'Arrays de keys sur lesquels on va boucler (map)...
    // Tout en le modifiant, en injectant des fonctions (ici hideName, handleChange) à chaque component suivant son id
    const list = Object.keys(family)
    .map(member => (
      <Member
        key={ member }
        hideName={ () => this.hideName(member) }
        handleChange={ event => this.handleChange(event, member) }
        gettingOlder={ num => this.handleClick(member, 1) }
        age={ family[member].age }
        name={ family[member].name } />

        // on aurait pu écrire, pour l'unicité de la key (mais moins efficace en cas de suppression d'une donnée dans la base de données, modifiant les index) :
        // .map((member, i) => (
        //... key={ i }
    ))

    // Au return, commence le GSX
    // Les classes s'écrivent avec className
    // Alors on liste les components...
    // On leur passe les attributs désirés (ici titre, value, name, age...) sous forme d'objets JS, qui peuvent être aussi des fonctions (handleChange, handleClick définies plus haut...)
    return (
      <div className="App">

      {/*au lieu de <h1>{ this.props.titre }</h1> grâce à la factorisation*/}
      <h1> {titre} </h1>

      { list }

      <Member
        age={ family.member6.age }
        name={ family.member6.name } >

        {/*Props children comme si un autre attribut était passé après name pour ce membre*/}
        { details }

        <button onClick={ this.handleShowDetails } >
          {
            isShown ? 'Hide details' : 'Show details'
          }
        </button>

      </Member>

      </div>
    );
  }
}

// On exporte enfin le component Principal ou de 1er niveau vers les components secondaires
export default App;
