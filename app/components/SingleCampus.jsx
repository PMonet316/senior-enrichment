import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'



export default class SingleCampus extends Component {
  constructor() {
    super();
    this.state = {
      selectedCampus: {},
    }
  }


  componentDidMount(){
    const campusId = this.props.match.params.campusId
    axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => this.setState({ selectedCampus: campus}))
    }


  render() {
    const campus = this.state.selectedCampus;
    console.log("STATE: ", this.state)
    return (
      <div>
        <h2>{campus.name}</h2>
        <p>{campus.description}</p>
      </div>
    )
  }
}
