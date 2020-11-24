import React, {Component} from 'react'
import { Link } from "react-router-dom"

class Nav extends Component {
  render(){
    return(
    <div>
      <nav className="navbar navbar-expand-lg px-5 shadow-sm p-3 bg-white rounded">
        <a className="navbar-brand" href="/">Notes</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/keeps/new">Add New</Link>
              </li>
            </ul>
        </div>
      </nav>
    </div>
    )
  }
}

export default Nav;