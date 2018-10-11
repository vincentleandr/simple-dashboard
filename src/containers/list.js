import React, { Component } from 'react';

class List extends Component {
	constructor(props) {
        super(props);

        this.state = {
			currentPage: 1,
			listPerPage: 20
		}
		
		this.clickPage = this.clickPage.bind(this);
	}
	
	// When page number is clicked
	clickPage(event) {
        this.setState({
			currentPage: Number(event.target.id)
		});

		// Remove all active classes on page-number
		const totalPage = document.getElementsByClassName('page-number');
		for (let i = 0; i < totalPage.length; i++){
			totalPage[i].classList.remove('active');
		}

		// Add active classes to the one being clicked
		event.target.classList.add('active');
	}

	render() {
		const theList = this.props.lists;
		const { currentPage, listPerPage } = this.state;

		// Logic for pagination
		const indexOfLastList = currentPage * listPerPage;
        const indexOfFirstList = indexOfLastList - listPerPage;
		const currentList = theList.slice(indexOfFirstList, indexOfLastList);

		const renderLists = currentList.map((list) => {
			return (
				<li key={list.id}>
					<span className="number"><b>{list.id}.</b></span>
					<div className="list-content">
						<p className="title">{list.title}</p>
						<p className="bodytext">{list.body}</p>
					</div>
				</li>
			);
		});
		
		// Generate page numbers
		const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(theList.length / listPerPage); i++) {
        	pageNumbers.push(i);
		}
		
		const renderPageNumbers = pageNumbers.map(number => {
			return (
				<li
					key={number}
					id={number}
					onClick={this.clickPage}
					className="page-number"
				>
					{number}
				</li>
			);
		});

		return (
			<div>
				<h2>This is List</h2>

				<ul className="list" id="list">
					{renderLists}
				</ul>

				<ul className="pagination">
					{renderPageNumbers}
				</ul>
			</div>
		);
	}
}

export default List;
