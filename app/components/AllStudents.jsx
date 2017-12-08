import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class AllStudents extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      selectedStudent: {}
    }
  }


  componentDidMount(){
    axios.get("api/students")
    .then(res => res.data)
    .then(students => this.setState({ students }));
    }


  render() {

    const students = this.state.students;

    return (
      <div>
        <h3>Students</h3>
          <div className="col s12 m7">
          {
            students.map(student => {
              return (
                <div key={student.id} className="card">
                  <Link to={`/students/${student.id}`}>
                  <div className="card-image">
                  </div>
                    <div>
                      <span className="card-title">{student.name}</span>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>

    )};
}
