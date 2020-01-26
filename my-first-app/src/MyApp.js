import React from 'react'
import Game2 from './Game2'
import WelcomeApp from './WelcomeApp'
import ActionEvent from './EventHandle'
import Toggle from './Toggle'
import List from './List'
import NameFrom from './NameForm'
import BoilerCalculator from './BoilerCalculator'
import WelcomeDialog from './WelcomeDialog'

class MyApp extends React.Component{
    render() {
    
    return (
        <div>
        {/*<WelcomeApp />*/}
        {/*<ActionEvent/>*/}
        {/*<Toggle/>*/}
        {/*<List number="2"/>*/}
        <NameFrom/>
        {/*<BoilerCalculator/>*/}
        {/*<WelcomeDialog/>*/}
        </div>
    );
    }
}


export default MyApp;