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
    {console.log("STATE: ", this.state)}
    return (

      <div>
        <h2>{student.name}</h2>
        <p>Email: {student.email}</p>
        <p>GPA: {student.gpa}</p>


      <Link to={`/students/${student.id}/edit`}>
      <button className="btn waves-effect waves-light">Edit Student</button>
    </Link>
      </div>
    )
  }
}
