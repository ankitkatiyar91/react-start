import React from 'react'
// import StreamingClient from 'streaming-client'
const  StreamingClient = require('streaming-client/index');

// comment
class InferenceTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            streaming: new StreamingClient()
        }
console.log("StreamingClient()", this.state.streaming);
        // If you want to bind it with the object then add following lines
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
    }

    handleStart(event) {
        // this.setState({name: event.target.value});
        console.log(this.state);
        const streaming = this.state.streaming;
        const language = 'en-IN';
        streaming.connect('http://35.192.29.24:9008/', language, function (action, id) {
            console.log("Connected", id);
            if (action === null) {
                streaming.startStreaming(function (transcript) {
                    console.log("Data", transcript);
                    this.setState({text : transcript});
                }, (e) => {
                    console.log("I got error", e);
                })
            } else {
                console.log("Action", action, id)
            }
        })
    }

    handleStop(event) {
        // this.setState({name: event.target.value});
        const streaming = this.state.streaming;
        streaming.stopStreaming();
        streaming.punctuateText(document.getElementById('output').innerHTML, 'https://inference.vakyansh.in/punctuate', (status, text) => {
            this.setState({text : text});
        }, (status, error) => {
            console.log("Failed to punctuate", status, error);
        })
    }


    render() {
        return (
            <div className="form">
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handleStop}>Stop</button>
                <p>{this.state.text}</p>
            </div>
        );
    }
}


export default InferenceTest;