import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


export default class SingleCampus extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.campus.name}</h2>
        <p>{this.props.campus.description}</p>
        {console.log(this.props.campus)}
      </div>
    )
  }
}
