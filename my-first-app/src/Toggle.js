import React from 'react'


class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isOn:true};
        // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return(
        <button
            onClick={this.handleClick}>
            {this.state.isOn ? 'ON':'OFF'}
        </button>);
    }

    handleClick(e){
        this.setState(state => ({isOn:!this.state.isOn}));
    }
}

export default Toggle;