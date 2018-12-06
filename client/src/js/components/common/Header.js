import React from 'react'
export default class Header extends React.Component {

  render() {
    return (
        <header>
            <div>
                <a href="/" >
                     <h1 className="possible-logo es">
                         Possible Books Search Test
                     </h1> 
                </a>
                <SearchForm />
            </div>
        </header>
    )
  }
}