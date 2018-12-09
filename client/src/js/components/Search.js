import React from 'react'
import ch from 'chico'
import tiny from 'tiny'

class SearchForm extends React.Component {

  render() {

    return (
          <form className="nav-search ml-search ch-form" action="/items">

              <input type="text" name="q" className="autocomplete" />

              <button type="submit" className="nav-search-btn ml-search-btn" >
                <i className="nav-icon-search ml-icon ml-icon-search"></i>
                <span className="ch-hide">Buscar</span>
              </button>
              <span className="ch-hide">Buscar</span>
          </form>
    )
  }

  componentDidMount() {
    const autocomplete = new ch.Autocomplete(document.querySelector('.autocomplete'))
      .on('type', function (query) {
        tiny.jsonp('http://127.0.0.1/api/books?q=' + query + '&v=1', {
          name: 'autocompleteSuggestion',
          success: function (results) {
            let data = []
            if (results[2].suggested_queries !== undefined) {
              results[2].suggested_queries.forEach(function (e) {
                data.push(e.q)
              })
              // Show suggestions
              autocomplete.suggest(data)
            }
          },
          error: function (err) {
            autocomplete.suggest( [] )
            throw new Error(err)
          }
        })
      })
  }

}

export default SearchForm
