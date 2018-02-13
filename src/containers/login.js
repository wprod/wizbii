import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  //TODO
  render() {
    return (<div className="jumbotron">
      Login :
      <input className="form-control"/>
      <input className="form-control"/>
      <Link className="btn btn-primary" to="/feeds">
        Login
      </Link>
    </div>)
  }
}
