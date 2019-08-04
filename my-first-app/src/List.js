import React from 'react'

class List extends React.Component{
    render(){
        console.log(this.props);
        const numbers = Array.apply(null, {length: this.props.number}).map(function(value, index){
            return index + 1;
          });
        // console.log(numbers);
        const listItems = numbers.map((n) => <li key={n} >Number {n}</li>);
        return(<ul>{listItems}</ul>);
    }
}


export default List;