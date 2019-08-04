/*
Square Component
*/
import React from 'react'

class Square extends React.Component{

    constructor(prop){
        super(prop);
        this.state = {
            value: ' ',
        };
    }

    render(){
        return(
            <button 
                className="square" 
                onClick={() => this.prop.onClick()} 
            >
                {this.prop}
            </button>
        );
    }
}

export default Square;