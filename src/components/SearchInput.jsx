import React, { Component } from "react";
import PropTypes from "prop-types";
/** */
class SearchInput extends Component {
  state = { name: "" };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.length === 0) return;

    this.props.onSearch(this.state.name);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="searchForm">
        <input
          type="text"
          autoFocus
          className="searchInput"
          name="name"
          id="name"
          placeholder="Start typing"
          value={this.state.name}
          onChange={this.handleInputChange}
        />

        <button type="submit" className="searchButtonLayout searchButton">
          <svg viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg">
            <title>Buscar</title>
            <path
              d="M18.387 16.623C19.995 15.076 21 12.907 21 10.5 21 5.806 17.195 2 12.5 2 7.806 2 4 5.806 4 10.5S7.806 19 12.5 19c1.927 0 3.7-.65 5.125-1.73l4.4 5.153.76-.65-4.398-5.15zM12.5 18C8.364 18 5 14.636 5 10.5S8.364 3 12.5 3 20 6.364 20 10.5 16.636 18 12.5 18z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </form>
    );
  }
}

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchInput;
