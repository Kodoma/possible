import React from 'react'
import axios from 'axios'

import Config from '../../config/config'
import Header from './common/Header'


export default class List extends React.Component {

  constructor() {
    super()
    this.state = {
      products: [],
      categories: []
    }
  }

  componentDidMount() {
    let url = `${Config.apibackend.url}/books/?q=${this.props.location.query.q}`

    axios.get(url)
    .then( response => {
      this.setState( { title: response.data.title, imageURL: response.data.imageURL } )
    })
    .catch( err => {
      throw new Error(err)
      //console.error(err)
    })
  }

  render() {
    let results = this.state.products.map( current => {
      const permalink = 'items/' + current.id
      const hasDecimals = (current.price.decimals > 0)
      return (
          <li className="results-item list-view-item rowItem">
            <h2 className="list-view-item-title">
              <a href="/"  className=" "> { current.title } </a>
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
