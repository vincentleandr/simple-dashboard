import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import axios from 'axios';

import './styles/styles.min.css';

import Header from './components/header';
import Sidenav from './components/sidenav';

import Home from './containers/home';
import NestedTab from './containers/nestedtab';
import List from './containers/list';

class App extends Component {
	constructor(props) {
        super(props);

        this.state = {
			name: 'Guest',
			lists: []
		}
		
		this.changeName = this.changeName.bind(this);
	}

	// Get API, push to state
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(response => {
			this.setState({ 
				lists: response.data 
			});
		})
	}
	
	// Change user's name based on input value
	changeName = (inputName) => {
		this.setState({
			name: inputName
		});
	}

	render() {
		return (
			<div className="App">
				<Header />
				
				<BrowserRouter>
					<div className="body">
						<Sidenav />
						<div className="main-content">
							<Switch>
								<Route exact path="/" render={() => <Home name={this.state.name} changeName={this.changeName} />} />
								<Route path="/nestedtab" render={() => <NestedTab name={this.state.name} />} />
								<Route path="/list" render={() => <List lists={this.state.lists} />} />
							</Switch>
						</div>
					</div>
				</BrowserRouter>

			</div>
		);
	}
}

export default App;
