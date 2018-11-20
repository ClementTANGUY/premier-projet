import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './Components/Member'
import Button from './Components/Button'

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

class App extends Component {

  state = {
    family
  }

  handleClick = (num) => {
    const familly = { ...this.state.family }
    family.member1.age += num
    this.setState({ family })
  }

  /*similar to :
   handleClick () {
    console.log('Click')
  }*/

  render() {
    const { titre } = this.props
    const { state } = this.state
    return (
      <div className="App">

      <h1> {titre} </h1>

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

export default App;
