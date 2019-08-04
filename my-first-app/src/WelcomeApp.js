import React from 'react'
import ReactDOM from 'react-dom';

function WelcomeApp(props){
return (
    <div>
        <Welcome name="Ankit" />
        <Welcome name="Bot" />
        <Welcome name="Ankit" />
    </div>
);
}


function Welcome(props){
   return <h3>Welcome {props.name}</h3>
}


function withdraw(account, amount) {
    account.total -= amount;
}

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state={
            date: new Date(),
        }
    }

    // this is called when component is rendered
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    // this is tear down method for the component
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // simple method for some operation
    tick(){
        this.setState({date:new Date()})
    }
    
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

function tick() {
    ReactDOM.render(
      <Clock />,
      document.getElementById('clock')
    );
  }
  
setInterval(tick, 1000);

export default WelcomeApp;