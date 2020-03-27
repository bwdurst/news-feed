import React from 'react'

class SearchBox extends React.Component {
  state = {
    searchType: "",
    searchEntry: ""
  }

  render() {
    return <div>
      <input value={this.state.searchEntry} onChange={(e) => this.setState({ searchEntry: e.target.value })} placeholder='Enter criteria here'></input>
      <select onChange={(e) => this.setState({ searchType: e.target.value })}>
        <option>Select One</option>
        <option value="story">Stories</option>
        <option value="comment">Comments</option>
      </select>
      <button onClick={() => this.props.search(this.state.searchType, this.state.searchEntry)}>Submit</button>
    </div>
  }
}

export default SearchBox;