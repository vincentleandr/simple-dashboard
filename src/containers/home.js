import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<h1>Welcome, {this.props.name} !</h1>

                <input type="text" placeholder="Type your name here..." onChange={(event) => this.props.changeName(event.target.value)}/>
			</div>
		);
	}
}

export default Home;
