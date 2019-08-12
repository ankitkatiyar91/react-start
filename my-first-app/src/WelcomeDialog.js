import React from 'react'
import FancyBorder from './FancyBorder'

class WelcomeDialog extends React.Component{
    render(){
        return(
            <FancyBorder color="blue">
            <h3 className="Dialog-title">
                Hey, I am child tag of a parent Component. I can be found using {'{this.props.children}'} tag
            </h3>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
            </FancyBorder>
        );
    }
}


export default WelcomeDialog;