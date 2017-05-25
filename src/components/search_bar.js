import React, { Component } from 'react';

class SearchBar extends Component{

	constructor(props) {
		super(props);
		this.state = { term: '' };
	}

	render() {
		return (
			<div className="search-bar">
		 		<input onChange={event => this.handleChange(event.target.value)} />
		 	</div>
		)
	}

	handleChange(term) {
		this.setState({term});
		this.props.onSearch(term);
	}



}

export default SearchBar;