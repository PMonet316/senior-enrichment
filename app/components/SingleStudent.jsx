import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { fetchSelectedStudent } from '../reducers/selectedStudent'
import { connect } from 'react-redux'



class SingleStudent extends Component {


  componentDidMount(){
    this.props.setStudent(this.props.match.params.studentId);
    }





  render() {
    const student = this.props.selectedStudent;
    console.log("PROPS: ", this.props.selectedCampus)
    return (
      <div>

        <h2>{student.name}</h2>
        <p>Email: {student.email}</p>
        <p>GPA: {student.gpa}</p>
        <p>Campus ID: {student.campusId}</p>
        <ul>
          <Link to={`/campuses/${student.campusId}`}>
            <button className="btn waves-effect waves-light">Navigate to Campus: {student.campusId}</button>
          </Link>
        </ul>
        <ul>
          <Link to={`/students/${student.id}/edit`}>
            <button className="btn waves-effect waves-light">Edit Student</button>
          </Link>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedStudent: state.selectedStudent
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setStudent: (studentId) => {
       dispatch(fetchSelectedStudent (studentId));
    }
  }
}

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent)

export default SingleStudentContainer;
