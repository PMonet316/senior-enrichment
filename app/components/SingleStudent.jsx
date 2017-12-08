import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


export default class SingleStudent extends Component {
  constructor() {
    super();
    this.state = {
      selectedStudent: {}
    }
  }




  componentDidMount(){
    const studentId = this.props.match.params.studentId
    axios.get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => this.setState({ selectedStudent: student}))
    }


  render() {
    const student = this.state.selectedStudent;

    return (
      <div>
        <h2>{student.name}</h2>
        <p>{student.email}</p>
        <p>{student.gpa}</p>
        {console.log(student)}
      </div>
    )
  }
}
