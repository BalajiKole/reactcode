import React, { Component } from 'react'

const withSearch = (WrappedComponent) => {
  return class extends Component {
    state = {
      searchTerm: ''
    }
    handleSearch = event => {
      console.log(event.target.value )
      this.setState({ searchTerm: event.target.value })
    }
 
    render() {
      return (
        <div>
          <div><br/><br/>
            <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search" />
          </div>
          <WrappedComponent searchTerm={this.state.searchTerm} />
        </div>
      )
    }
  }
 
}
export default withSearch
