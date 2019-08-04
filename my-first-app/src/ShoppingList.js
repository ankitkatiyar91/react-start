// This is a new React Componenent 

// default import required for React, bnecause we are going to extend a React.Component class
import React from 'react';

/* Here, ShoppingList is a React component class, or React component type. 
A component takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display 
via the render method.
*/
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}


// export this component
export default ShoppingList;