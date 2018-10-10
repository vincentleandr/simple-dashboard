import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

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
			name: 'Vincent',
			input: ''
		}
		
		this.changeName = this.changeName.bind(this);
	}
	
	changeName(event) {
		this.setState({
			name: event.target.value
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
								{/* <Route exact path="/" component={Home} name={this.state.name} /> */}

								<Route exact path="/" render={()=><Home name={this.state.name} input={this.state.input} changeName={this.changeName}/>} />
								<Route exact path="/nestedtab" component={NestedTab} />
								<Route exact path="/list" component={List} />
							</Switch>
						</div>
					</div>
				</BrowserRouter>

			</div>
		);
	}
}

export default App;
