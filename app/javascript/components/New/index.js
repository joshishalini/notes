import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

export default class New extends Component {
  constructor() {
    super();
    this.state = {
      description: "",
    };
  }

  typing(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  create(e){
    console.log(this.state)
    axios.post("/notes",this.state)
    .then((response) => {
      console.log(response)
      if (response.data.success) {
        console.log("Yeah")
        toast.success("Note added succesfully.");
        this.props.history.push("/");
      }else{
        console.log("Ahh")
        toast.error(response.data.message);
      }
    })
    .catch(error => {
      console.log(error)
      toast.error(response.data.message);
    })
  }

  render() {
    return (
    <div>
        <h1>New Keep</h1>
        <form>
          <div className="form-group">
            <textarea onChange={(e) => this.typing(e)}
              type="text"
              className="form-control"
              placeholder="New Note"
              id="description"
              name="description"
            />
          </div>         
          
          <button type="button" className="btn btn-primary" onClick={(e) => this.create(e)}>
            <i className="fa fa-check" aria-hidden="true"></i>
            Create
          </button>
        </form>
    </div>
    );
  }
}