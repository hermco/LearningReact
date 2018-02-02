import React, { Component } from 'react';
//const Component = React.Component;

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: ''};
    this.onNewResearch = props.onNewResearch;
  }

  render() {
    //return <input onChange={this.onInputChange} />;
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => {
            this.setState({term:event.target.value});
            this.onNewResearch(event.target.value);
          }}
        />
      </div>
    )
  }

  onInputChange(event){
    event.persist(); //to keep value even with React's event polling.
    console.log(event.target.value);
  }
}

export default SearchBar; //only export SearchBar component when importing 'search_bar.js'
