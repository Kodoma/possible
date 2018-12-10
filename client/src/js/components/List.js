import React from 'react'
import axios from 'axios'

import Config from '../../config/config'
import Header from './common/Header'


export default class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    let url = `${Config.apibackend.url}/books?q=`+ this.props.location.query.title
    console.log('Query',this.props.location.query)
    axios.get(url)
    .then( response => {
      console.log(response)
      this.setState({ books: response.data } )
    })
    .catch( err => {
      console.log(err.response)
      throw new Error(err)
    })
  }

  render() {
    let results = this.state.books.map( current => {
      return (
        
          <li className="results-item list-view-item rowItem">
            <h2 className="list-view-item-title">
              <a href="/"  className="list-view-item-title"> { current.title } </a>
            </h2>
            <div className="images-viewer" >
              <a href="/" class="item-link">
                <img alt={ current.title } src={ current.imageURL } data-pin-nopin="true" />
              </a>
            </div>
          </li>
      )
    })
    
    return(
      <div>
        <Header />
          <div className="section">
            <ol className="list-view srv">
              { results }
            </ol>
          </div>
      </div>
    )
  }

}
