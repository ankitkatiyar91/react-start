import React from 'react'
import {Button, Form, FormControl, FormGroup, FormLabel, FormText} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// comment
class MyBootForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password : '',
        }

        // If you want to bind it with the object then add following lines
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        // this.handleFruitChange = this.handleFruitChange.bind(this);
        // this.handleEssayChange = this.handleEssayChange.bind(this);
    }

    handleSubmit(event) {
        alert('Form Submitted with Name: ' + this.state.name +' Fruit: '+this.state.fruit+' Essay:'+this.state.essay);
        event.preventDefault();
    }

    handleEmailChange(event) {

        this.setState({ email : event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({  password: event.target.value });
    }

    render() {
        return (
            <div className="form" >
                <Form>
                    <FormGroup controlId="formBasicEmail">
                        <FormLabel>Email address</FormLabel>
                        <FormControl type="email" onChange={this.handleEmailChange} placeholder="Enter email" />
                        <FormText className="text-muted" >
                            We'll never share your email with anyone else.
                        </FormText>
                    </FormGroup>

                    <FormGroup controlId="formBasicPassword">
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password"  onChange={this.handlePasswordChange} placeholder="Password" />
                    </FormGroup>
                    <FormGroup controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </FormGroup>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <br />
                <span><b>You are typing:</b>  <br/>
                Email: {this.state.email} <br/>
                Password: {this.state.password} <br/>
                </span>
            </div>
        );
    }
}


export default MyBootForm;