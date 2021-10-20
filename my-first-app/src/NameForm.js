import React from 'react'
// comment
class NameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            essay : '',
            fruit : 'Grapefruit'
        }

        // If you want to bind it with the object then add following lines
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFruitChange = this.handleFruitChange.bind(this);
        this.handleEssayChange = this.handleEssayChange.bind(this);
    }

    handleSubmit(event) {
        alert('Form Submitted with Name: ' + this.state.name +' Fruit: '+this.state.fruit+' Essay:'+this.state.essay);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleFruitChange(event) {
        this.setState({ fruit: event.target.value });
    }

    handleEssayChange(event){
        this.setState({ essay: event.target.value });
    }

    render() {
        return (
            <div className="form" >
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                {/* Here I have not set the value of the input field. 
                Idealy it should be set to the {this.state.value} making the React state the source of truth. */}
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>

                    <label>
                    Pick your favorite flavor:
                    <select value={this.state.fruit} onChange={this.handleFruitChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    </label>

                    <label>
                    Essay:
                    <textarea value={this.state.essay} onChange={this.handleEssayChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <span><b>You are typing:</b>  <br/>
                Name: {this.state.name} <br/> 
                Fruit: {this.state.fruit} <br/>
                Essay: {this.state.essay}
                </span>
            </div>
        );
    }
}


export default NameForm;