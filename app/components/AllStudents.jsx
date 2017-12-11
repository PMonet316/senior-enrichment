import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { fetchAllStudents, deleteStudentThunk } from '../reducers/students'
import { connect } from 'react-redux'


class AllStudents extends Component {
  constructor(props) {
    super(props);

  }


  componentDidMount(){
      this.props.loadStudents();
    }


  render() {

    const students = this.props.students;
    return (
      <div>
        <h3>Students</h3>
          <Link to={`/addNewStudent`}>
            <button className="btn waves-effect waves-light">Add New Student</button>
          </Link>
          <div className="collection">
          { students.length &&
            students.map(student => {
              return (
                <div key={student.id} className="collection-item">
                  <div  className="card">
                    <Link to={`/students/${student.id}`}>
                    <div className="card-image">
                    </div>
                      <div>
                        <h2><span className="card-stacked">{student.name}</span></h2>
                      </div>
                    </Link>
                    <div className="btn waves-effect waves-light chip" onClick={() => this.props.deleteStudent(student.id)}>
                    Delete Student
                  </div>

                  </div>

              </div>
              )
            })
          }
        </div>
      </div>

    )};
}

const mapStateToProps = state => {
  return {
    students: state.students
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadStudents: () => {
       dispatch(fetchAllStudents());
    },
    deleteStudent: (studentId) => {
      dispatch(deleteStudentThunk(studentId));
    }
  }
}


const StudentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents)

export default StudentsContainer;
