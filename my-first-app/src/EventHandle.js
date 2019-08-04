import React from 'react'

class ActionButton extends React.Component{

    render(){
        return (
            <button onClick={handle} name="" >
            Click Me
            </button>
        );
    }

    
}

function handle(){
    return (alert('Hey Man! You clicked me'));
}

export default ActionButton;