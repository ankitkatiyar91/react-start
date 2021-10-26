import React from 'react'
import {StreamingClient,SocketStatus} from '@project-sunbird/open-speech-streaming-client'

// comment
class InferenceTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            streaming: new StreamingClient()
        }
        // If you want to bind it with the object then add following lines
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
    }

    handleStart(event) {
        const streaming = this.state.streaming;
        const language = 'en-IN';
        const _this=this;
        streaming.connect('http://localhost:9008/', language, function (action, id) {
            console.log("Connected", id,'action:',action);
            if (action === SocketStatus.CONNECTED) {
                console.log('Starting.....');
                streaming.startStreaming(function (transcript) {
                    console.log("Data", transcript);
                    _this.setState({text : transcript});
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
        console.log('Punctuate clicked: '+this.state.text);
        if (this.state.text) {
            const streaming = this.state.streaming;
            const _this = this;
            streaming.stopStreaming();
            streaming.punctuateText(this.state.text, 'https://inference.vakyansh.in/punctuate/', (status, text) => {
                _this.setState({text: text});
            }, (status, error) => {
                console.log("Failed to punctuate", status, error);
            })
        } else {
           return ;
        }
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