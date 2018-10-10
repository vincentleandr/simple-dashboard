import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidenav extends Component {
	render() {
		return (
            <nav className="sidenav">
                <ul>
                    <li><NavLink exact to='/' activeClassName="active"><span>Home</span></NavLink></li>
                    <li><NavLink to='/nestedtab' activeClassName="active"><span>Nested Tab</span></NavLink></li>
                    <li><NavLink to='/list' activeClassName="active"><span>List</span></NavLink></li>
                </ul>
            </nav>
		);
	}
}

export default Sidenav;
