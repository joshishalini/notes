import React, { Component } from 'react'
import axios from "axios";
export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.loadNotes()
  }

  loadNotes(){
    axios.get("/notes/get_all_notes")
    .then((response) => {
      console.log(response)
      this.setState({ notes: response.data.notes});
      console.log(this.state)
    })
    .catch(error => {
      console.log(error)
      toast.error(response.data.message);
    })
  }

  render() {
    return(
      <div>
        <section className="home-section">       
          <div className="landing-row">
            <div className="head-container">
              <div className="heading">
                <p>
                    Keep your ideas here
                </p>                                
                <a href="/keeps/new" className="landing-btn">
                    New Note
                </a>
                <p className="offer">100% free | Easy To Use </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row ml-5">
            <ul>
            {this.state.notes.map((note, index) => (
              // <div className="col-md-3" key={index}>
              //     <p>{note.description}</p>
              // </div>
              <li key={index}>{note.description}</li>
            ))}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}