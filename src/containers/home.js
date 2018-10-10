import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
        let nameBefore = this.props.name;
        let nameChanged = this.state.input;
        
        nameBefore = nameChanged;
    }

	render() {
		return (
			<div className="">
				<h1>Welcome, {this.props.name} !</h1>

                <input type="text" placeholder="Type your name here..." value={this.state.input} onChange={this.handleChange}/>
                <button type="submit" onClick={this.props.changeName}>Submit</button>
			</div>
		);
	}
}

export default Home;
