import React from 'react'
import { browserHistory } from 'react-router'

class SearchForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const path = '/books?title='+ this.state.value
    browserHistory.push(path)
  }

  render() {
    return (
      <form className="nav-search ml-search ch-form" onSubmit={this.handleSubmit}>

          <input className="ml-icon ml-icon-search" 
              type="text" 
              value={this.state.value}
              placeholder="Enter Book Title"
              onChange={this.handleChange}
              />
          <button type="submit">&#x1F50D;</button>
      </form>
    )
  }
}

export default SearchForm
