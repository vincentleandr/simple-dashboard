import React, { Component } from 'react';
import {
    Route,
	Switch,
	NavLink
} from 'react-router-dom';

const TabOne = (props) => (
	<div>
		<p>Hi, <b>{props.name}</b> ! <br/>
		This is Tab One.</p>
	</div>
);

const TabTwo = (props) => (
	<div>
		<p>Hi, <b>{props.name}</b> ! <br/>
		This is Tab Two.</p>
	</div>
);

class NestedTab extends Component {
	render() {
		return (
			<div>
				<h2>This is Nested Tab Page</h2>
				<ul class="nestedtab">
					<li><NavLink to='/nestedtab/tab1' activeClassName="active"><span>Tab #1</span></NavLink></li>
					<li><NavLink to='/nestedtab/tab2' activeClassName="active"><span>Tab #2</span></NavLink></li>
				</ul>
				<Switch>
					<Route path="/nestedtab/tab1" render={() => <TabOne name={this.props.name} />} />
					<Route path="/nestedtab/tab2" render={() => <TabTwo name={this.props.name} />} />
				</Switch>
			</div>
		);
	}
}

export default NestedTab;
