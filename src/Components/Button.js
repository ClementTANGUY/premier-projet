import React from 'react'
import './Button.css'


// Component secondaire ou de 2ème niveau, dit "stateless"
const Button = ({ gettingOlder }) => (
  <div>
    <button className="gettingOlder" onClick = { gettingOlder } >
      Getting older by 2 years
    </button>
  </div>
)

// On exporte le component de 2ème niveau vers le component principal
export default Button
