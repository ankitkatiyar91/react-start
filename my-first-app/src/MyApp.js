import React from 'react'
import Game2 from './Game2'
import WelcomeApp from './WelcomeApp'
import ActionEvent from './EventHandle'
import Toggle from './Toggle'
import List from './List'
import NameFrom from './NameForm'

class MyApp extends React.Component{
    render() {
    
    return (
        <div>
        <WelcomeApp />
        <ActionEvent/>
        <Toggle/>
        <List number="2"/>
        <NameFrom/>
        </div>
    );
    }
}


export default MyApp;